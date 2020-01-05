import Trim from "../components/StringOptions/Trim";
import Split from "../components/StringOptions/Split";

const rules = {
  trim: {
    component: {
      element: Trim,
      info: {
        heading: "Trim",
        description: "Removes whitespace on begininng and the end of a text.",
      },
    },
    baseTemplate: {
      type: "trim",
      value: "",
    },
  },
  split: {
    component: {
      element: Split,
      info: {
        heading: "Split",
        description: "Lorem ipsum.",
      },
    },
    baseTemplate: {
      type: "split",
      value: ",",
    },
  },
  join: {
    component: {
      element: "",
      info: {
        heading: "Join",
        description: "Lorem ipsum.",
      },
    },
    baseTemplate: {
      type: "join",
      value: ",",
    },
  },
};

export default rules;
