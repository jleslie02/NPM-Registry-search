/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import RegistryItem from '../../molecules/RegistryItem';

import './transitions.css';

const propTypes = {
  data: PropTypes.instanceOf(Array),
  theme: PropTypes.instanceOf(Object)
};

const defaultProps = {
  data: null,
  theme: { mixins: {}, layout: {}, colors: {} }
};

const Registry = props => {
  const { data, theme } = props;

  // Define styles
  const classes = {
    registry: css({
      ...theme.mixins.flexDisplay(),
      background: theme.palette.registry.background,
      height: '100%',
      marginTop: '15px',
      borderTop: `1px solid ${
        theme.palette.registry.borderTopColor
      }`,
      '> div': {
        width: '100%',
        height: 'calc(100% - 150px)',
        overflow: 'scroll',
        padding: '0 20px'
      }
    }),
    item: css((() => ({}))())
  };

  return (
    <div
      data-gm="registry"
      className="registry"
      css={classes.registry}
    >
      <CSSTransitionGroup
        component="div"
        transitionName="registry"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
      >
        {data.map(item => {
          return (
            <RegistryItem
              key={item.package.name}
              score={item.score}
              data={item.package}
              flags={item.flags}
              theme={theme}
              css={classes.item}
            />
          );
        })}
      </CSSTransitionGroup>
    </div>
  );
};

Registry.propTypes = propTypes;
Registry.defaultProps = defaultProps;

export default Registry;
