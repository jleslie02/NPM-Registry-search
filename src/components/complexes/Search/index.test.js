import React from "react";
import { getByTestId, fireEvent, cleanup } from "react-testing-library";

import { themedRender } from "../../../test-utils";
import Search from "./index";

afterEach(cleanup);

it("Should Not trigger a submit if search is empty", () => {
  const props = {
    onSearch: jest.fn(),
    search: {},
    isLoading: false
  };
  const { container } = themedRender(Search, props);
  const searchInput = getByTestId(container, "searchInput");
  const submitButton = getByTestId(container, "submitButton");

  expect(searchInput.value).toBe("");
  fireEvent.click(submitButton);
  expect(props.onSearch.mock.calls.length).toBe(0);
});

it("Should trigger if the new text is different than the current search", () => {
  const props = {
    onSearch: jest.fn(),
    search: {},
    isLoading: false
  };
  const { container } = themedRender(Search, props);
  const searchInput = getByTestId(container, "searchInput");
  const submitButton = getByTestId(container, "submitButton");

  fireEvent.change(searchInput, { target: { value: "search" } });
  fireEvent.click(submitButton);
  expect(props.onSearch.mock.calls.length).toBe(1);
});

it("Should not trigger if the value of the text is the same as the value of the current query", () => {
  const props = {
    onSearch: jest.fn(),
    search: { q: "search" },
    isLoading: false
  };
  const { container } = themedRender(Search, props);
  const searchInput = getByTestId(container, "searchInput");
  const submitButton = getByTestId(container, "submitButton");

  fireEvent.change(searchInput, { target: { value: "search" } });
  fireEvent.click(submitButton);
  expect(props.onSearch.mock.calls.length).toBe(0);

  fireEvent.change(searchInput, { target: { value: "newSearch" } });
  fireEvent.keyPress(searchInput, { key: "Enter", keyCode: 13, which: 13 });
  expect(props.onSearch.mock.calls.length).toBe(1);
});
