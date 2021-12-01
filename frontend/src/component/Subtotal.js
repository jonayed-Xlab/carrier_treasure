import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  const history = useHistory();
function ok(value){
  if(value.length === 0) {return true;}
  else {return false;}
}
  return (
    <div className="conatiner">
      <div className="row">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({cart.length} items):{" "}
                <strong className="">{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" TK"}
        />

        <button
          className="button mt-3"
          onClick={(e) => history.push("/Payment")}
          disabled={ok(cart)}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
