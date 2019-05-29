import { cleanup } from "react-testing-library";

import { themedRender, themedComponent } from "../../../test-utils";
import Filters from "./index";

afterEach(cleanup);

it("Should always have three filters", () => {
  const props = {
    setActualSearch: jest.fn(),
    search: {},
    keywords: [],
    data: null
  };
  const { getByTestId } = themedRender(Filters, props);
  const filters = getByTestId("filters");

  expect(filters.children.length).toBe(3);
});

it("should be closed and open on showFilter change", () => {
  const { getAllByTestId, rerender } = themedRender(Filters, { data: null });
  const wrapper = getAllByTestId("wrapper");
  expect(wrapper[0].className.includes("open")).toBe(false);

  rerender(themedComponent(Filters, { showFilters: true }));

  expect(wrapper[0].className.includes("open")).toBe(true);
});
