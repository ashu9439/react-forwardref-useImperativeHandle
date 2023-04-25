import React, { forwardRef } from "react";

function CustomInput(props, ref) {
  return <input ref={ref} style={{ backgroundColor: "red" }} {...props} />;
}

export default forwardRef(CustomInput);
