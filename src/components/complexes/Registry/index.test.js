import React from "react";
import { getByTestId, cleanup } from "react-testing-library";

import { themedRender } from "../../../test-utils";
import Registry from "./index";

afterEach(cleanup);

it("Should have No children", () => {
  const { container } = themedRender(Registry, { data: [] });
  const registry = getByTestId(container, "registry");

  expect(registry.children[0].children.length).toBe(0);
});

it("Should have 4 children", () => {
  const { container } = themedRender(Registry, {
    data: [
      { pacakge: {}, score: {}, flags: {} },
      { pacakge: {}, score: {}, flags: {} },
      { pacakge: {}, score: {}, flags: {} }
    ]
  });
  const registry = getByTestId(container, "registry");
  expect(registry.children[0].children[0].children.length).toBe(4);
});
