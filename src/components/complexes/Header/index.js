/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { withRouter } from 'react-router';
import mascot from '../../../assets/logo-mascot.svg';
import moon from '../../../assets/crescent-moon.svg';
import sun from '../../../assets/sunny.svg';
import OnOffToggle from '../../atoms/OnOffToggle';
import ChaosToggle from '../../molecules/ChaosToggle';
import LoadingView from '../../atoms/LoadingView';

const Header = props => {
  // Define styles
  const { theme } = props;
  const classes = {
    header: css(
      (() => ({
        height: '65px',
        ...theme.mixins.boxShadow(
          '-7px -3px 10px 0px rgba(0,0,0,0.34)'
        )
      }))()
    ),

    headerWrapper: css(
      (() => ({
        padding: '0 20px',
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center'),
        ...theme.mixins.justifyContent('space-between')
      }))()
    ),

    headerImage: css(
      (() => ({
        width: '60px'
      }))()
    ),

    filterToggle: css(
      (() => ({
        ' > i': {
          textShadow: `0 0 1px #000`,
          fontSize: '28px',
          WebkitTextFillColor: 'white', // #313131
          WebkitTextStrokeWidth: '1.5px',
          WebkitTextStrokeColor: '#828282', // fff
          '&.show': {
            WebkitTextFillColor: '#daea70',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: '#b5bb54'
          }
        }
      }))()
    ),

    icons: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center')
      }))()
    ),

    customStyles: css({
      marginLeft: '0px'
    })
  };

  const {
    showFilters,
    themeMode,
    chaosMode,
    toggleTheme,
    toggleChaos,
    toggleFilters,
    isLoading
  } = props;

  return (
    <div
      data-gm="header"
      className="header"
      css={classes.header}
    >
      <LoadingView loading={isLoading} />
      <div css={classes.headerWrapper}>
        <div css={classes.headerImage}>
          <img src={mascot} alt="mascot" />
        </div>
        <div css={classes.icons}>
          {/* Filter toggle */}
          <div
            css={classes.filterToggle}
            onClick={toggleFilters}
          >
            <i
              className={`${
                showFilters ? 'show' : ''
              } fa fa-filter fa-inverse`}
            />
          </div>

          {/* Chaos toggle */}
          <ChaosToggle
            theme={theme}
            active={chaosMode}
            toggleChaos={toggleChaos}
          />

          {/* Theme toggle */}
          <OnOffToggle
            theme={theme}
            checked={themeMode === 'dark'}
            image={themeMode === 'dark' ? moon : sun}
            toggleSwitch={toggleTheme}
            styles={classes.customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
