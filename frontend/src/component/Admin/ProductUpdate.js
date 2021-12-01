import React, { useState, useEffect } from "react";
import "./ProductUpdate.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import axios from "axios";
import {storage} from '../firebase.js';
import upload from "../icon/upload.png";
function ProductUpdate() {
  const [selectedFile, setSelectedFile] = useState();
  const [imgurl, setImgurl] = useState();
  const [preview, setPreview] = useState();
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [unitStoks, setUnitStoks] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [data, setData] = useState('');
  const [productList, setProductList] = useState([]);

  function sleep(ms) {
    return new  Promise(resolve => setTimeout(resolve, ms));
  }
  const sendproduct= (e) => {
    
     
    e.preventDefault();
    storage.ref(`/images/${selectedFile.name}`).getDownloadURL().then((url)=>{
    const uri = String(url);
      setImgurl(uri);
    })
    const data = {
      
      productId: productId,
      productName: productName,
      productDescription: productDescription,
      expireDate: expireDate,
      unitStoks: unitStoks,
      productPrice: productPrice,
      imgURL: imgurl
    }
    
    
   axios.post('http://localhost:8080/api/product', data).then(res => {
     setData(res.data);
    //  setProductId('');
    //  setProductName('');
    //  setProductDescription('');
    //  setExpireDate('');
    //  setUnitStoks('');
    //  setProductPrice('');
    setImgurl('')
   }).catch(err => {
     console.log("error...")
   });
 }
 useEffect(() => {
  getProductList();
});
 const getProductList = () => {
  axios.get("http://localhost:8080/api/product").then((res) => {
    setProductList(res.data);
  });
};

const deleteProduct = (e) =>{
  axios.delete(`http://localhost:8080/api/product/${e.target.value}`)
        .then();
}
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
   
    

  };

  const saveImage = ()=>{
    storage.ref(`/images/${selectedFile.name}`).put(selectedFile);
  }
  
  return (
    <div>
      <main className="mt-5 pt-3">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-md-12 fw-bold fs-4">Add Product</div>
          </div>
          <div className="row">
            <div className="col-md-6 col">
              <form>
                <div className="form-group mt-2">
                  <label for="Input1">Product Id</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="Input1"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="Input1">Product Name</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="Input1"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="Input2 mr-2">Product Description</label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    id="Input2"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mt-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <label for="Input3">Expire Date</label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          id="Input3"
                          value={expireDate}
                          onChange={(e) => setExpireDate(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <label for="Input4">Units In Stock</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Input4"
                          value={unitStoks}
                          onChange={(e) => setUnitStoks(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label for="Input1">Product Price</label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="Input1"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 col col-offset-6">
              <label for="files">
                <img src={upload} alt="" className="img-thumbnail" />
              </label>
              <input
                onChange={onSelectFile}
                type="file"
                id="files"
            
                hidden
              />
              {selectedFile && (
                <img
                  src={preview}
                  style={{ marginLeft: "15px", width: "300px" }}
                />
              )}
            </div>
          </div>
          <button className="btn btn-warning mx-5"  onClick={saveImage}>Save mage</button>

          <button className="btn btn-success"  onClick={sendproduct}>Add Product Now</button>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-4">Product list</div>
          </div>
          <div className="row">
            <div className="col col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">PRODUCT__ID</th>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">IN STOCK</th>
                    <th scope="col">EXPIRE DATE</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((product, index) => (
                    <tr>
                      <th scope="row">{product.productId}</th>
                      <td>{product.productName}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.unitStoks}</td>
                      <td>{product.expireDate}</td>
                      <td>
                       <button className="btn btn-danger" value={product.id} onClick={deleteProduct}>
                        <DeleteForeverIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductUpdate;
