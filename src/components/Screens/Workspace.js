import React from "react";
import { TextField, Grid } from "@material-ui/core";
import StringOptions from "../StringOptions";

function Workspace(props) {
  return (
    <React.Fragment>
      <TextField
        multiline={true}
        placeholder="Your text here"
        label="Your Text"
        rows="4"
      />

      <StringOptions />

      <TextField
        multiline={true}
        disabled={true}
        placeholder="Your text here"
        label="Results"
        rows="4"
      />
    </React.Fragment>
  );
}

export default Workspace;
