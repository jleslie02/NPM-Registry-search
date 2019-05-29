// Static component with conditional rendering so snapshot test should suffice
import renderer from "react-test-renderer";
import Tag from "./index";
import { themedComponent } from "../../../test-utils";

it("renders correctly with full props", () => {
  const props = {
    label: "A label",
  };
  const tree = renderer.create(themedComponent(Tag, props)).toJSON();
  expect(tree).toMatchSnapshot();
});
