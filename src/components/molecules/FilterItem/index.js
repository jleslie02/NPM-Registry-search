/* @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import equals from "ramda/src/equals";
import Select from "react-select";
import { styles } from "./style";

const propTypes = {
  name: PropTypes.string,
  hasData: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.string,
    PropTypes.bool
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.string,
    PropTypes.bool
  ]),
  type: PropTypes.string,
  display: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.instanceOf(Array),
  search: PropTypes.instanceOf(Object),
  onFilterChange: PropTypes.func,
  theme: PropTypes.instanceOf(Object)
};

const defaultProps = {
  onFilterChange: () => {},
  theme: { mixins: {}, layout: {}, colors: {} },
  name: "unknown",
  description: "",
  defaultValue: null,
  value: null,
  type: "sort",
  display: "",
  options: [],
  search: {},
  hasData: false
};

// subcomponent
const FilterInput = props => {
  const { onSave, value, classes, type, options, setCurrentValue } = props;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "red" : "blue"
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: "none"
    }),
    container: provided => ({
      ...provided,
      // none of react-select's styles are passed to <Control />
      fontSize: "14px",
      margin: "20px 0"
    }),
    input: provided => ({
      ...provided,
      margin: "0",
      fontSize: "10px"
    }),
    control: provided => ({
      ...provided,
      minHeight: "26px",
      height: "26px",
      "&:focus": {
        borderColor: "#cccccc"
      },
      "> div": {
        height: "24px"
      }
    }),
    clearIndicator: () => ({
      display: "none"
    }),
    indicatorsContainer: provided => ({
      ...provided,
      height: "24px"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    }
  };

  if (type === "multiSelect" || type === "singleSelect") {
    return (
      <Select
        value={!value ? null : { value, label: value }}
        onChange={e => setCurrentValue(e.value)}
        options={options.map(opt => ({
          value: opt,
          label: opt
        }))}
        data-testid="selectInput"
        styles={customStyles}
        className="select"
        isMulti={type === "multiSelect"}
        isSearchable={type === "multiSelect"}
      />
    );
  }
  return (
    <div css={classes.toggle} data-testid="toggle">
      <div
        className={`${value === true ? "selected" : ""}`}
        data-testid="on-toggle"
        onClick={() => onSave(true)}
      >
        ON
      </div>
      <div
        className={`${!value ? "selected" : ""}`}
        data-testid="off-toggle"
        onClick={() => onSave(false)}
      >
        OFF
      </div>
    </div>
  );
};

// Main component

const FilterItem = props => {
  // Set states and destructure props
  const [open, toggleOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const {
    name,
    value,
    display,
    type,
    options,
    search,
    defaultValue,
    onFilterChange,
    description,
    theme,
    hasData
  } = props;

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const classes = styles(theme);

  // Utilities functions
  const reset = e => {
    e.stopPropagation();
    onFilterChange({
      ...search,
      [name]: defaultValue
    });
  };

  const resetCurrent = () => {
    setCurrentValue(value);
    toggleOpen(false);
  };

  const filterIcons = {
    ranking: "fa fa-key",
    keywords: "fa fa-search",
    stableonly: "fa fa-balance-scale"
  };

  const displayValue = () => {
    if (value && typeof value === "object") {
      return value.length === 0 ? "Any" : value.join(", ");
    }
    if (typeof value === "boolean") {
      return value ? "On" : "Off";
    }
    return value || "Any";
  };

  // mutate the current value
  // coming from onChange by the filter
  const changeCurrentValue = newValue => {
    setCurrentValue(newValue);
  };

  const changeOpenState = () => {
    if (hasData) {
      toggleOpen(!open);
    }
  };

  // Funtion to Change the filter globally
  const onSave = newValue => {
    // Close the filter
    toggleOpen(false);
    // Mutate the filtering state of the page if the value selected is different
    // than the value that came in the props
    if (newValue !== undefined) {
      if (!equals(value, newValue)) {
        onFilterChange({
          ...search,
          stableonly: newValue
        });
      }
    } else {
      onFilterChange({
        ...search,
        [name]: currentValue
      });
    }
  };

  // End utilities functions

  return (
    <div
      data-testid="filterItem"
      className={`${open ? "open" : ""} filterItem `}
      css={classes.filterItem}
    >
      <div
        css={classes.wrapper}
        data-testid="wrapper"
        className={`wrapper ${equals(defaultValue, value) ? "" : "isSet"}`}
        onClick={changeOpenState}
      >
        <div css={classes.icon} className="icon">
          <span className={filterIcons[name]} />
        </div>
        <div css={classes.description}>
          <div className="name">{display}</div>
          <div className="value">{displayValue(value)}</div>
        </div>
        {!equals(defaultValue, value) && !open && (
          <div css={classes.reset} onClick={reset}>
            <span className="fa fa-times" />
          </div>
        )}
      </div>
      {open && (
        <div
          css={classes.filterBody}
          className="filterBody"
          data-testid="filterBody"
        >
          {/* Filter description */}
          <div css={classes.title}>{description}</div>
          {/* Filter input */}
          <FilterInput
            type={type}
            options={options || []}
            value={currentValue}
            setCurrentValue={changeCurrentValue}
            onSave={onSave}
            onCancel={reset}
            classes={classes}
          />
          {/* Button group to save or cancel */}
          {type !== "toggle" && (
            <div css={classes.buttonGroup} className="buttonGroup">
              <button type="button" onClick={resetCurrent}>
                cancel
              </button>
              <button
                type="button"
                disabled={equals(value, currentValue)}
                onClick={() => onSave()}
              >
                save
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

FilterItem.propTypes = propTypes;
FilterItem.defaultProps = defaultProps;

export default FilterItem;
