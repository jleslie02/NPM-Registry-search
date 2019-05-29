import React from "react";
import { render } from "react-testing-library";
import makeAtomicTheme from "./theme";

export const themedRender = (MyComponent, props) => {
  return render(<MyComponent theme={makeAtomicTheme()} {...props} />);
};

export const themedComponent = (MyComponent, props) => {
  return <MyComponent theme={makeAtomicTheme()} {...props} />;
};
