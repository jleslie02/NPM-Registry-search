/* @jsx jsx */
import React, { useMemo } from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import pluck from "ramda/src/pluck";
import flatten from "ramda/src/flatten";
import uniq from "ramda/src/uniq";
import identity from "ramda/src/identity";
import filter from "ramda/src/filter";
import pipe from "ramda/src/pipe";
import Search from "../../complexes/Search";
import Registry from "../../complexes/Registry";
import Filters from "../../complexes/Filters";

const propTypes = {
  onSearch: PropTypes.func,
  search: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
  showFilters: PropTypes.bool
};

const defaultProps = {
  onSearch: () => {},
  search: {},
  data: null,
  isLoading: false,
  showFilters: false
};

const Home = props => {
  const {
    search,
    onSearch,
    setActualSearch,
    data,
    theme,
    showFilters,
    isLoading
  } = props;

  // Define style
  const classes = {
    home: css({
      height: "100%",
      overflow: "hidden"
    }),
    type: css(
      (() => ({
        height: "80%",
        ...theme.mixins.flexCenter(),
        color: theme.palette.registry.color,
        fontSize: "25px",
        background: theme.palette.registry.background
      }))()
    )
  };
  // End Utilities functions

  const memoizedKeywords = useMemo(() => {
    return pipe(
      pluck("package"),
      pluck("keywords"), // pluck out all keywords
      flatten, // flatten
      uniq, // remove dups
      filter(identity) // remove undefined vars
    )(data || []);
  }, [data]);

  /**
   * Display the right registry message or the list of packages
   * depending on the data rendered
   */
  const getRegistry = () => {
    if (!data) {
      return <div css={classes.type}>Type in a package...</div>;
    }
    if (data.length === 0) {
      return <div css={classes.type}>No package found</div>;
    }

    return <Registry data={data} theme={theme} />;
  };

  return (
    <div data-testid="home" className="home" css={classes.home}>
      <Filters
        setActualSearch={setActualSearch}
        search={search || {}}
        data={data || []}
        theme={theme}
        keywords={memoizedKeywords}
        showFilters={showFilters}
      />
      <Search
        theme={theme}
        onSearch={onSearch}
        search={search}
        isLoading={isLoading}
      />
      {getRegistry()}
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
