/* @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import mascot from "../../../assets/logo-mascot.svg";
import moon from "../../../assets/crescent-moon.svg";
import sun from "../../../assets/sunny.svg";
import OnOffToggle from "../../atoms/OnOffToggle";
import ChaosToggle from "../../molecules/ChaosToggle";
import LoadingView from "../../atoms/LoadingView";

const propTypes = {
  toggleFilters: PropTypes.func,
  toggleTheme: PropTypes.func,
  toggleChaos: PropTypes.func,
  theme: PropTypes.instanceOf(Object),
  chaosMode: PropTypes.string,
  isLoading: PropTypes.bool,
  showFilters: PropTypes.bool,
  themeMode: PropTypes.string
};

const defaultProps = {
  theme: { mixins: {}, layout: {}, colors: {} },
  toggleFilters: () => {},
  toggleTheme: () => {},
  toggleChaos: () => {},
  chaosMode: null,
  isLoading: false,
  showFilters: false,
  themeMode: "light"
};

const Header = props => {
  // Define styles
  const { theme } = props;
  const classes = {
    header: css(
      (() => ({
        height: "65px",
        background: theme.palette.header.background,
        ...theme.mixins.boxShadow(theme.palette.header.boxShadow)
      }))()
    ),

    headerWrapper: css(
      (() => ({
        padding: "0 20px",
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems("center"),
        ...theme.mixins.justifyContent("space-between")
      }))()
    ),

    headerImage: css(
      (() => ({
        width: "60px"
      }))()
    ),

    filterToggle: css(
      (() => ({
        " > i": {
          fontSize: "28px",
          ...theme.palette.header.filter,
          "&.show": {
            WebkitTextFillColor: "#daea70",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#b5bb54"
          }
        }
      }))()
    ),

    icons: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems("center")
      }))()
    ),

    customStyles: css({
      marginLeft: "0px"
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
    <div data-testid="header" className="header" css={classes.header}>
      <LoadingView loading={isLoading} />
      <div css={classes.headerWrapper}>
        <div css={classes.headerImage}>
          <img src={mascot} alt="mascot" data-testid="mascot" />
        </div>
        <div css={classes.icons} data-testid="icons">
          {/* Filter toggle */}
          <div
            css={classes.filterToggle}
            className="filterToggle"
            data-testid="toggle"
            onClick={toggleFilters}
          >
            <i
              data-testid="filterIcon"
              className={`${showFilters ? "show" : ""} fa fa-filter fa-inverse`}
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
            checked={themeMode === "dark"}
            image={themeMode === "dark" ? moon : sun}
            toggleSwitch={toggleTheme}
            styles={classes.customStyles}
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
