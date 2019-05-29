// Static component with conditional rendering so snapshot test should suffice
import renderer from "react-test-renderer";
import LoadingView from "./index";
import { themedComponent } from "../../../test-utils";

it("renders correctly with full props", () => {
  const props = {
    loading: true,
  };
  const tree = renderer.create(themedComponent(LoadingView, props)).toJSON();
  expect(tree).toMatchSnapshot();
});
