/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';
import { withRouter } from 'react-router';

const Search = props => {
  const {
    search,
    keywords,
    setActualSearch,
    isLoading,
    theme
  } = props;

  // Define styles
  const classes = {
    filters: css({}),
    wrapper: css((() => ({}))()),

    buttonSearch: css((() => ({}))())
  };

  const filters = [
    {
      name: 'ranking',
      value: search.ranking || '',
      type: 'singleSelect',
      options: ['popularity', 'maintenance', 'quality']
    },
    {
      name: 'keywords',
      value: search.keywords || [],
      type: 'multiSelect',
      options: keywords
    },
    {
      name: 'stableonly',
      value: search.staleonly || false,
      type: 'toggle'
    }
  ];

  return (
    <div
      data-gm="filters"
      className="filters"
      css={classes.filters}
    >
      {filters.map(filter => {
        // return <FilterItem key={`${filter.name}-filter`} {...filter} />;
        return null;
      })}
    </div>
  );
};

export default withRouter(Search);
