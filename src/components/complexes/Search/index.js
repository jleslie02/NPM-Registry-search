/* @jsx jsx */
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const propTypes = {
  onSearch: PropTypes.func,
  theme: PropTypes.instanceOf(Object),
  search: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool
};

const defaultProps = {
  theme: { mixins: {}, layout: {}, colors: {} },
  onSearch: () => {},
  search: {},
  isLoading: false
};

const Search = props => {
  const { search, onSearch, isLoading, theme } = props;

  // Define styles
  const classes = {
    search: css({
      position: "relative",
      ...theme.mixins.flexDisplay()
    }),
    wrapper: css(
      (() => ({
        border: "0",
        borderBottom: "1.5px solid #e5e5e5",
        fontSize: "18px",
        lineHeight: "30px",
        minHeight: "50px",
        color: theme.palette.search.color,
        background: theme.palette.search.background,
        outline: "none",
        ...theme.mixins.placeholder("#979797", "18px"),
        margin: "0px",
        width: "100%",
        padding: "10px 30px",
        paddingRight: "90px"
      }))()
    ),

    buttonSearch: css(
      (() => ({
        position: "absolute",
        height: "35px",
        right: "0",
        top: "17px",
        width: "80px",
        borderRadius: "10px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderRight: "none",
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems("center"),
        background: "rgb(214, 156, 40)",
        ...theme.mixins.boxShadow("-2px 2px 4px #cac1bb"),
        cursor: "pointer",
        "> i": {
          paddingLeft: "14px",
          color: "#ffffff",
          fontSize: "18px"
        },
        ":hover": {
          ...theme.mixins.boxShadow("-1px 0px 4px #cac1bb")
        }
      }))()
    )
  };

  // Search States
  const [query, setQuery] = useState("");
  // End Search States

  // Utilities functions
  const setSearch = () => {
    const canSearch = () => {
      return query !== "" && query !== (search || {}).q;
    };
    if (canSearch() && !isLoading) {
      const newSearch = { q: query };
      onSearch(newSearch);
    }
  };

  const onKeyPress = e => {
    if (e.charCode === 13) {
      setSearch();
    }
  };

  // const toggleOpen = () => setShowFilters(!showFilters);

  // End Utilities functions

  return (
    <div data-testid="search" className="search" css={classes.search}>
      <input
        css={classes.wrapper}
        type="text"
        value={query}
        data-testid="searchInput"
        placeholder="Search packages..."
        onChange={e => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <div
        css={classes.buttonSearch}
        onClick={setSearch}
        data-testid="submitButton"
      >
        <i className="fa fa-search" />
      </div>
    </div>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
