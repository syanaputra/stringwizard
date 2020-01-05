import React from "react";
import RadioBox from "../Common/RadioBox";

function Replace(props) {
  return (
    <React.Fragment>
      <RadioBox
        name="stringRule"
        value="replace"
        heading="Replace"
        description="Replace specified text with something else."
      />
    </React.Fragment>
  );
}

export default Replace;
