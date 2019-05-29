import { fireEvent, cleanup } from "react-testing-library";

import { themedRender } from "../../../test-utils";
import ChaosToggle from "./index";

afterEach(cleanup);

it("Should Open the chaos on click", () => {
  const props = {
    toggleChaos: jest.fn(),
    active: null
  };
  const { getByTestId } = themedRender(ChaosToggle, props);
  const trigger = getByTestId("trigger");
  const bug = getByTestId("bug");

  fireEvent.click(trigger);
  const icons = getByTestId("icons-chaos");
  expect(icons.className.includes("open")).toBe(true);
  // should show all options
  expect(icons.children.length).toBe(5);
  expect(bug.src).toBe("http://localhost/clean-virus.svg");
});

it("Should close the menu on click of a chaos", () => {
  const props = {
    toggleChaos: jest.fn(),
    active: "chaos"
  };
  const { getByTestId } = themedRender(ChaosToggle, props);
  const trigger = getByTestId("trigger");
  const bug = getByTestId("bug");

  // virus should be lit
  expect(bug.src).toBe("http://localhost/active-virus.svg");

  fireEvent.click(trigger);
  const icons = getByTestId("icons-chaos");
  const stopIcon = getByTestId("chaos-stop");

  fireEvent.click(stopIcon);
  expect(icons.className.includes("open")).toBe(false);
});
