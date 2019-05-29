import React from "react";
import { getByTestId, cleanup } from "react-testing-library";

import { themedRender } from "../../../test-utils";
import Header from "./index";

afterEach(cleanup);

it("Should have a loading, a mascot, filter, theme and chaos toggles", () => {
  const { container } = themedRender(Header, {});
  const header = getByTestId(container, "header");
  const mascot = getByTestId(container, "mascot");
  const icons = getByTestId(container, "icons");

  expect(header.children[0].className.includes("load-bar")).toBe(true);
  expect(mascot.src).toBe("http://localhost/logo-mascot.svg");
  expect(icons.children.length).toBe(3);
  expect(icons.children[0].className.includes("filterToggle")).toBe(true);
  expect(icons.children[1].className.includes("chaosToggle")).toBe(true);
  expect(icons.children[2].className.includes("switch")).toBe(true);
});
