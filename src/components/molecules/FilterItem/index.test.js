import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow";
import { getByTestId, fireEvent, cleanup } from "react-testing-library";

import { themedRender } from "../../../test-utils";
import FilterItem from "./index";

afterEach(cleanup);

it("Should not allow filter change if data is empty ", () => {
  const props = {
    onFilterChange: jest.fn()
  };
  const { getByTestId } = themedRender(FilterItem, props);
  const filterItem = getByTestId("filterItem");
  const wrapper = getByTestId("wrapper");

  expect(filterItem.children.length).toBe(1);
  expect(filterItem.children[0].className.includes("wrapper")).toBe(true);
  // try t0 toggle
  fireEvent.click(wrapper);
  // Does not change because the data is null
  expect(filterItem.children.length).toBe(1);
});

it("Should allow to toggle if data is a non empty array", () => {
  const props = {
    onFilterChange: jest.fn(),
    hasData: true
  };
  const { getByTestId } = themedRender(FilterItem, props);
  const filterItem = getByTestId("filterItem");
  const wrapper = getByTestId("wrapper");

  expect(filterItem.children.length).toBe(1);
  expect(filterItem.children[0].className.includes("wrapper")).toBe(true);
  // try t0 toggle
  fireEvent.click(wrapper);
  // Does not change because the data is null
  expect(filterItem.children.length).toBe(2);
  expect(filterItem.children[1].className.includes("filterBody")).toBe(true);
});

it("Should display the toggle filter on select", () => {
  const props = {
    onFilterChange: jest.fn(),
    hasData: true,
    type: "toggle",
    value: false
  };
  const { getByTestId } = themedRender(FilterItem, props);
  const wrapper = getByTestId("wrapper");

  fireEvent.click(wrapper);
  const toggle = getByTestId("toggle");

  const onToggle = getByTestId("on-toggle");

  expect(toggle.children.length).toBe(2);
  // click on the off toggle should not trigger nothing
  fireEvent.click(onToggle);
  expect(props.onFilterChange.mock.calls.length).toBe(1);
});

it("Should toggle off when the value is true on a toggle filter", () => {
  const props = {
    onFilterChange: jest.fn(),
    hasData: true,
    type: "toggle",
    value: true
  };
  const { getByTestId, rerender } = themedRender(FilterItem, props);
  const wrapper = getByTestId("wrapper");

  fireEvent.click(wrapper);
  const toggle = getByTestId("toggle");
  const offToggle = getByTestId("off-toggle");

  expect(toggle.children.length).toBe(2);
  // click on the off toggle should not trigger nothing
  fireEvent.click(offToggle);
  expect(props.onFilterChange.mock.calls.length).toBe(1);
});

// it("Should trigger if the new text is different than the current search", () => {
//   const props = {
//     onSearch: jest.fn(),
//     search: {},
//     isLoading: false
//   }
//   const { container } = themedRender(Search, props);
//   const searchInput  = getByTestId(container, "searchInput");
//   const submitButton  = getByTestId(container, "submitButton");

//   fireEvent.change(searchInput, { target: { value: "search" } });
//   fireEvent.click(submitButton);
//   expect((props.onSearch.mock.calls.length)).toBe(1);
// });

// it("Should not trigger if the value of the text is the same as the value of the current query", () => {
//   const props = {
//     onSearch: jest.fn(),
//     search: {q: "search"},
//     isLoading: false
//   }
//   const { container } = themedRender(Search, props);
//   const searchInput  = getByTestId(container, "searchInput");
//   const submitButton  = getByTestId(container, "submitButton");

//   fireEvent.change(searchInput, { target: { value: "search" } });
//   fireEvent.click(submitButton);
//   expect((props.onSearch.mock.calls.length)).toBe(0);
// });
