/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import Search from '../../complexes/Search';
import Registry from '../../complexes/Registry';

const propTypes = {
  onSearch: PropTypes.func,
  search: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool
};

const defaultProps = {
  onSearch: () => {},
  search: {},
  data: {},
  isLoading: false
};

const Home = props => {
  const { search, onSearch, data, theme, isLoading } = props;

  const classes = {
    home: css({
      height: '100%',
      overflow: 'hidden'
    })
  };
  // End Utilities functions

  return (
    <div data-gm="home" className="home" css={classes.home}>
      <Search
        theme={theme}
        onSearch={onSearch}
        search={search}
        isLoading={isLoading}
      />
      <Registry data={data} theme={theme} />
      {/* <Filters /> */}
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
