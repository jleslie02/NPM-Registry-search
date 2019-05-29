import ReactDOM from 'react-dom';
import { act, Simulate} from 'react-dom/test-utils';
import {  fireEvent, cleanup } from "react-testing-library";

import { themedRender, themedComponent } from "../../../test-utils";
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
  const { getByTestId } = themedRender(FilterItem, props);
  const wrapper = getByTestId("wrapper");

  fireEvent.click(wrapper);
  const toggle = getByTestId("toggle");
  const offToggle = getByTestId("off-toggle");

  expect(toggle.children.length).toBe(2);
  // click on the off toggle should not trigger nothing
  fireEvent.click(offToggle);
  expect(props.onFilterChange.mock.calls.length).toBe(1);
});

describe('Filter select should behave correctly', () => {
  let container, props;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    props = {
      onFilterChange: jest.fn(),
      hasData: true,
      type: "singleSelect",
      value: ""
    };
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render and update a the select value', () => {
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(themedComponent(FilterItem, props), container);
    });

    const wrapper = container.querySelector('.wrapper');
    Simulate.click(wrapper);
    // open the select and have the buttons
    let filterBody = container.querySelector('.filterBody');
    expect(filterBody.children.length).toBe(3);

    const buttonGroup = container.querySelector('.buttonGroup');
    // save should be disabled
    expect(buttonGroup.children[1].disabled).toBe(true);
    // cancel should be enabled
    expect(buttonGroup.children[0].disabled).toBe(false);

    act(() => {
      Simulate.click(buttonGroup.children[0])
      filterBody = container.querySelector('.filterBody');
    });
    //should close the filter body
    expect(container.children.length).toBe(1);
  });
});

describe('Filter select update on value change', () => {
  let container, props;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    props = {
      onFilterChange: jest.fn(),
      hasData: true,
      type: "singleSelect",
      value: "mine",
      defaultValue: null,
      options: ["mine"]
    };
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render and update a the select value', () => {
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(themedComponent(FilterItem, props), container);
    });

    const wrapper = container.querySelector('.wrapper');
    Simulate.click(wrapper);
    // open the select and have the buttons
    const buttonGroup = container.querySelector('.buttonGroup');
    const save = buttonGroup.querySelector(":nth-child(1)")
    // save should be disabled
    expect(save.disabled).toBe(false);
    // cancel should be enabled
    expect(buttonGroup.children[0].disabled).toBe(false);

    act(() => {
      Simulate.click(buttonGroup.children[0])
    });
    //should close the filter body
    expect(container.children.length).toBe(1);
  });
});
