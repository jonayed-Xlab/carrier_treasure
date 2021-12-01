import React,{useState, useEffect} from "react";
// import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');

  const sendFeedback= (e) => {
    //  e.preventDefault();
    const data = {

      email: email,
      message: message
    }
   
    axios.post('http://localhost:8080/api/feedback', data).then(res => {
      setData(res.data);
      setEmail('');
      setMessage('');
    }).catch(err => {
      console.log("error...")
    });
  }
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=""
              role="button"
            >
              <FacebookIcon />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=""
              role="button"
              >
              <TwitterIcon />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=""
              role="button"
            >
              <InstagramIcon />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=""
              role="button"
              >
              <RedditIcon />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=""
              role="button"
              >
              <LinkedInIcon />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=""
              role="button"
              >
              <GitHubIcon />
            </a>
          </section>
        </div>

        <div className="container p-4">
                      <form>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About SobiPabe</h5>
              <p>
                SobiPabe Inc. is a global commerce leader that connects lakhs of
                buyers and sellers in more than 50k markets around the
                Bangladesh. We exist to enable economic opportunity for
                individuals, entrepreneurs, businesses and organizations of all
                sizes.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 ">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Improve Ourself 😎</strong>
                    </p>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        placeholder="Enter email"
                        className="font-weight-bold form-control font-italic"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <textarea
                        className="form-control font-weight-normal"
                        placeholder="Enter Message"
                        rows="3"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                      onClick={sendFeedback}
                      >
                      Give Feedback
                    </button>
                  </div>

                  <div className="col-auto"></div>
                </div>
            </div>
          </div>
                      </form>
        </div>

        <div className="text-center p-3 cl">
          © 2021-2024 Copyright :<a className="text-white mx-3">Sobipabe.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
