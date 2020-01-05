import React from "react";
import { TextField, Grid } from "@material-ui/core";
import rules from "../../data/rules";

function StringOption(props) {
  const { type, onClick } = props.value;

  if(typeof(rules[type]) === 'undefined') {
    return "";
  }

  const componentData = rules[type].component || null;
  const Element = componentData.element || null;
  const elementProps = componentData.info || {};

  if (Element === null) {
    return "";
  }

  return (
    <React.Fragment>
      <Element
          name="stringRule"
          type={type}
          onClick={onClick}
          {...elementProps}
      />
    </React.Fragment>
  );
}

export default StringOption;
