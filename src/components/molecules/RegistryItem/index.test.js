// Static component with conditional rendering so snapshot test should suffice
import renderer from "react-test-renderer";
import RegistryIem from "./index";
import { themedComponent } from "../../../test-utils";

it("renders correctly with default props", () => {
  const props = {
    score: {},
    flags: null,
    data: {}
  };
  const tree = renderer.create(themedComponent(RegistryIem, props)).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with partial props", () => {
  const props = {
    score: {
      detail: {
        maintenance: 0.9,
        quality: 0.9,
        popularity: 0.9
      }
    },
    data: {
      name: "a package"
    }
  };
  const tree = renderer.create(themedComponent(RegistryIem, props)).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with full props", () => {
  const props = {
    score: {
      detail: {
        maintenance: 0.9,
        quality: 0.9,
        popularity: 0.9
      }
    },
    flags: {
      unstable: true
    },
    data: {
      name: "a package"
    }
  };
  const tree = renderer.create(themedComponent(RegistryIem, props)).toJSON();
  expect(tree).toMatchSnapshot();
});
