import React from "react";
import RadioBox from "../Common/RadioBox";

function Trim(props) {
  return (
    <React.Fragment>
      <RadioBox
        name={props.name}
        value={props.type}
        heading={props.heading || ''}
        description={props.description || ''}
        handleChange={props.handleChange}
        checked={props.checked || false}
      />
    </React.Fragment>
  );
}

export default Trim;
