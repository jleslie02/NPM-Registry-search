/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { withRouter } from 'react-router';
import Header from './components/complexes/Header';
import Alerts from './components/molecules/Alerts';
import makeAtomicTheme from './theme';

import './styles.css';
import { useDataApi } from './hooks';
import Home from './components/pages/home';

const App = props => {
  const { history } = props;

  // App States
  const [{ height, width }, setDimensions] = useState({
    height: null,
    width: null
  });
  // Choose your app theme
  const [theme, setTheme] = useState(makeAtomicTheme());
  const [mode, setMode] = useState('light');

  // Instantiate app state and filters
  const [
    {
      data,
      isError,
      message,
      isLoading,
      chaosMode,
      actualSearch
    },
    fetchData,
    setActualSearch,
    setChaosMode,
    setError
  ] = useDataApi(null, null, history);

  // Choose how you want your api to fail
  const [showFilters, setShowFilters] = useState(false);

  // End App States

  // React hooks

  // Update the height of the application
  // on window resize
  const updateDimensions = () => {
    const { documentElement } = document;
    const body = document.getElementsByTagName('body')[0];
    const newHeight =
      window.innerHeight ||
      documentElement.clientHeight ||
      body.clientHeight;
    const newWidth =
      window.innerWidth ||
      documentElement.clientWidth ||
      body.clientWidth;
    setDimensions({ height: newHeight, width: newWidth });
  };

  // instantiate a window listener on resize
  // to update the overall height and width of the app
  useEffect(() => {
    if (height === null) {
      updateDimensions();
    }
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // instantiate a window listener on resize
  // to update the overall height and width of the app
  useEffect(() => {
    setTheme(makeAtomicTheme(mode));
  }, [mode]);

  // End React hooks

  // Utilities functions

  const toggleChaosMoode = newMode => setChaosMode(newMode);
  const toggleTheme = () =>
    setMode(`${mode === 'light' ? 'dark' : 'light'}`);
  const toggleShowFilters = () =>
    setShowFilters(!showFilters);

  // End Utilities functions

  // Styles
  const app = css(
    (() => ({
      ...theme.mixins.flexDisplay(),
      ...theme.mixins.flexDirection('column'),
      ...theme.mixins.justifyContent('space-between')
    }))()
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        data-gm="app"
        className="app"
        style={{ height }}
        css={app}
      >
        <Header
          isLoading={isLoading}
          height={height}
          width={width}
          theme={theme}
          themeMode={mode}
          chaosMode={chaosMode}
          showFilters={showFilters}
          toggleChaos={toggleChaosMoode}
          toggleFilters={toggleShowFilters}
          toggleTheme={toggleTheme}
        />
        <Alerts
          removeError={() =>
            setError({ isError: null, message: null })
          }
          isError={isError}
          message={message}
        />
        <Home
          onSearch={fetchData}
          search={actualSearch}
          setActualSearch={setActualSearch}
          data={data}
          isLoading={isLoading}
          theme={theme}
        />
        {/*
        <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default withRouter(App);
