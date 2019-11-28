import React from "react";
import { TextField, Grid } from "@material-ui/core";
import rules from "./rules";

function StringOptions(props) {
  // const { selected } = props;
  const elementProps = {};

  const selected = "trim";

  const Element = rules[selected] || null;

  if (Element === null) {
    return "";
  }

  return (
    <React.Fragment>
      <Element {...elementProps} />
    </React.Fragment>
  );
}

export default StringOptions;
