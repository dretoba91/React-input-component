import React from "react";
import "./Inputs.css";

function Inputs(props) {
  return (
    <div>
      <input
        type="text"
        className={"input-" + props.theme}
        value={props.children}
      />
    </div>
  );
}

export default Inputs;
