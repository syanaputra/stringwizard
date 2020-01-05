import React from "react";
import StringOption from "./StringOption";

function StringOptions(props) {
  const { value } = props;

  return (
    <React.Fragment>
      {value != null && value.length > 0 && value.map((item, key) =>
        <StringOption
          key={key}
          value={item}
        />
      )}
    </React.Fragment>
  );
}

export default StringOptions;
