/* @jsx jsx */
import React, { useState, useEffect, useMemo } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import includes from "ramda/src/includes";
import Header from "./components/complexes/Header";
import Alerts from "./components/molecules/Alerts";
import makeAtomicTheme from "./theme";

import "./styles.css";
import { useDataApi } from "./hooks";
import Home from "./components/pages/home";

const App = () => {
  // App States
  const [{ height, width }, setDimensions] = useState({
    height: null,
    width: null
  });
  // Choose your app theme
  const [theme, setTheme] = useState(makeAtomicTheme());
  const [mode, setMode] = useState("light");

  // Instantiate app state and filters
  const [
    { data, isError, message, isLoading, chaosMode, actualSearch },
    fetchData,
    setActualSearch,
    setChaosMode,
    setError
  ] = useDataApi(null, null);

  // Choose how you want your api to fail
  const [showFilters, setShowFilters] = useState(false);
  // End App States

  // React hooks

  // Update the height of the application
  // on window resize
  const updateDimensions = () => {
    const { documentElement } = document;
    const body = document.getElementsByTagName("body")[0];
    const newHeight =
      window.innerHeight || documentElement.clientHeight || body.clientHeight;
    const newWidth =
      window.innerWidth || documentElement.clientWidth || body.clientWidth;
    setDimensions({ height: newHeight, width: newWidth });
  };

  // instantiate a window listener on resize
  // to update the overall height and width of the app
  useEffect(() => {
    if (height === null) {
      updateDimensions();
    }
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // set the overall theme
  useEffect(() => {
    setTheme(makeAtomicTheme(mode));
  }, [mode]);

  // End React hooks

  // Utilities functions

  const toggleChaosMoode = newMode => setChaosMode(newMode);
  const toggleTheme = () => setMode(`${mode === "light" ? "dark" : "light"}`);
  const toggleShowFilters = () => setShowFilters(!showFilters);

  const filteredData = useMemo(() => {
    if (!data || data.length === 0) return data;

    const filters = actualSearch || {};
    let newData = data;
    // Filter by rank if available
    if ((filters.ranking || "").length > 0) {
      newData.sort((itemA, itemB) => {
        return (
          itemB.score.detail[filters.ranking] -
          itemA.score.detail[filters.ranking]
        );
      });
    }
    // filter by stable only if on
    if (filters.stableonly) {
      newData = newData.filter(item => {
        return !item.flags || !item.flags.unstable;
      });
    }

    // filter by keywords if available
    if (filters.keywords) {
      newData = newData.filter(item => {
        return includes(filters.keywords, item.package.keywords || []);
      });
    }

    if (filters.q) {
      newData.sort(itemA => {
        return itemA.package.name === filters.q;
      });
    }

    return newData;
  }, [data, actualSearch]);

  // End Utilities functions

  // Styles
  const app = css(
    (() => ({
      ...theme.mixins.flexDisplay(),
      ...theme.mixins.flexDirection("column"),
      ...theme.mixins.justifyContent("space-between"),
      backgroundColor: theme.palette.app.background
    }))()
  );

  return (
    <ThemeProvider theme={theme}>
      <div data-testid="app" className="app" style={{ height }} css={app}>
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
          removeError={() => setError({ isError: null, message: null })}
          theme={theme}
          isError={isError}
          message={message}
        />
        <Home
          onSearch={fetchData}
          search={actualSearch}
          setActualSearch={setActualSearch}
          data={filteredData}
          isLoading={isLoading}
          theme={theme}
          showFilters={showFilters}
        />
        {/*
        <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
