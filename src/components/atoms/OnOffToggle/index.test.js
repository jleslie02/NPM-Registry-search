import { fireEvent, cleanup } from "react-testing-library";

import { themedRender, themedComponent } from "../../../test-utils";
import OnOffToggle from "./index";

afterEach(cleanup);

it("Should Open the chaos on click", () => {
  const props = {
    toggleSwitch: jest.fn(),
    checked: false,
    image: "",
    styles: {}
  };
  const { getByTestId, rerender } = themedRender(OnOffToggle, props);
  const input = getByTestId("input");
  
  expect(input.checked).toBe(false);

  fireEvent.click(input);
  expect(props.toggleSwitch.mock.calls.length).toBe(1);

  rerender(themedComponent(OnOffToggle, { checked: true }));

  expect(input.checked).toBe(true);

});