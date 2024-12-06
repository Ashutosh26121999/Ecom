import React from "react";
import "./Row.css";

function Row({children, style}) {
  return (
    <div className='row' style={style}>
      {children}
    </div>
  );
}

export default Row;
