import React from "react";
import RadioBox from "../Common/RadioBox";

function Trim(props) {
  return (
    <React.Fragment>
      <RadioBox
        name="stringRule"
        value="trim"
        heading="Trim"
        description="Removes whitespace on begininng and the end of a text."
      />
    </React.Fragment>
  );
}

export default Trim;
