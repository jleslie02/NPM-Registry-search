/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import RegistryItem from '../../molecules/RegistryItem';

import './transitions.css';

const Registry = props => {
  const { data, theme } = props;

  // Define styles
  const classes = {
    registry: css({
      ...theme.mixins.flexDisplay(),
      height: '100%',
      '> div': {
        width: '100%',
        height: 'calc(100% - 95px)',
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
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}
      >
        {data.map(item => {
          return (
            <RegistryItem
              key={item.package.name}
              score={item.score}
              data={item.package}
              theme={theme}
              css={classes.item}
            />
          );
        })}
      </CSSTransitionGroup>
    </div>
  );
};

export default Registry;
