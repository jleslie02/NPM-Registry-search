import { cleanup } from "react-testing-library";

import { themedRender } from "../../../test-utils";
import Header from "./index";

afterEach(cleanup);

it("Should have a loading, a mascot, filter, theme and chaos toggles", () => {
  const { getByTestId } = themedRender(Header, {});
  const header = getByTestId("header");
  const mascot = getByTestId("mascot");
  const icons = getByTestId("icons");

  expect(header.children[0].className.includes("load-bar")).toBe(true);
  expect(mascot.src.includes("logo-mascot.svg")).toBe(true);
  expect(icons.children.length).toBe(3);
  expect(icons.children[0].className.includes("filterToggle")).toBe(true);
  expect(icons.children[1].className.includes("chaosToggle")).toBe(true);
  expect(icons.children[2].className.includes("switch")).toBe(true);
});
