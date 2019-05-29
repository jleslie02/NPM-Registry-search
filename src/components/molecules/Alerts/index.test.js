// Static component with conditional rendering so snapshot test should suffice
import renderer from "react-test-renderer";
import Alerts from "./index";
import { themedComponent } from "../../../test-utils";

it("renders correctly with default props", () => {
  const props = {
    message: "",
    isError: false
  };
  const tree = renderer.create(themedComponent(Alerts, props)).toJSON();
  expect(tree).toBe(null);
});

it("renders nothing if there is no error to show", () => {
  const props = {
    message: "An error",
    isError: false
  };
  const tree = renderer.create(themedComponent(Alerts, props)).toJSON();
  expect(tree).toBe(null);
});

it("renders correctly with full props", () => {
  const props = {
    message: "An error",
    isError: true
  };
  const tree = renderer.create(themedComponent(Alerts, props)).toJSON();
  expect(tree).toMatchSnapshot();
});
