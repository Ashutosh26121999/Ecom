import React from "react";
import "./Subtotal.css";
import {NumericFormat} from "react-number-format";
import {useStateValue} from "../StateManagement/StateProvider";

function Subtotal() {
  const [{basket}] = useStateValue();
  const total = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className='subtotal'>
      <NumericFormat
        value={total}
        displayType='text'
        thousandSeparator={true}
        decimalScale={2}
        prefix='$'
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
