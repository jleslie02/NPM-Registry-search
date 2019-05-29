/* @jsx jsx */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import FilterItem from "../../molecules/FilterItem";

const propTypes = {
  setActualSearch: PropTypes.func,
  search: PropTypes.instanceOf(Object),
  keywords: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
  theme: PropTypes.instanceOf(Object),
  showFilters: PropTypes.bool
};

const defaultProps = {
  setActualSearch: () => {},
  theme: { mixins: {}, layout: {}, colors: {} },
  search: {},
  keywords: [],
  data: null,
  showFilters: false
};

const Filters = props => {
  const { search, keywords, setActualSearch, data, showFilters, theme } = props;

  // Define styles
  const classes = {
    filters: css(
      (() => ({
        background: theme.palette.filters.background,
        ...theme.mixins.boxShadow(theme.palette.filters.boxShadow),
        padding: "10px 0"
      }))()
    ),
    wrapper: css(
      (() => ({
        ...theme.mixins.boxShadow(theme.palette.filters.boxShadow),
        maxHeight: "0",
        overflow: "hidden",
        ...theme.mixins.transition("max-height 0.4s ease-in-out"),
        "&.open": {
          maxHeight: "150px"
        }
      }))()
    )
  };

  const filters = [
    {
      name: "ranking",
      display: "Sort By",
      value: search.ranking || "",
      defaultValue: "",
      description: "Sort by packages stats.",
      type: "singleSelect",
      options: ["popularity", "maintenance", "quality"]
    },
    {
      name: "stableonly",
      display: "Stable Only",
      defaultValue: false,
      value: search.stableonly || false,
      type: "toggle",
      description: "Filter out unstable packages."
    },
    {
      name: "keywords",
      display: "Has keyword",
      value: search.keywords || "",
      defaultValue: "",
      type: "singleSelect",
      description: "Display packages with specific keywords.",
      options: keywords
    }
  ];

  return (
    <div
      css={classes.wrapper}
      data-testid="wrapper"
      className={`${showFilters ? "open" : ""}`}
    >
      <div
        data-testid="filters"
        className="filters"
        css={classes.filters}
      >
        {filters.map(filter => {
          return (
            <FilterItem
              key={`${filter.name}-filter`}
              {...filter}
              search={search}
              theme={theme}
              onFilterChange={setActualSearch}
              hasData={(data || []).length > 0}
            />
          );
        })}
      </div>
    </div>
  );
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
