/* @jsx jsx */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const propTypes = {
  checked: PropTypes.bool,
  toggleSwitch: PropTypes.func,
  theme: PropTypes.instanceOf(Object),
  image: PropTypes.string,
  styles: PropTypes.instanceOf(Object)
};

const defaultProps = {
  checked: false,
  toggleSwitch: () => {},
  theme: {},
  image: "",
  styles: {}
};
const BaseOnOffToggle = props => {
  // Define styles
  const { theme, image, checked, toggleSwitch, styles } = props;
  // Styling the component
  const classes = {
    toggle: css({}, styles),
    switch: css({
      position: "relative",
      display: "inline-block",
      width: "60px",
      height: "34px",
      cursor: "pointer"
    }),

    input: css(
      (() => ({
        opacity: "0",
        width: "0",
        height: "0",
        ":checked + .slider": {
          backgroundImage:
            "linear-gradient(to right , rgb(12, 43, 90), rgb(0, 136, 255))"
        },
        ":focus + .slider": {
          boxShadow: "0 0 1px #2196F3"
        },
        ":checked + .slider:before": {
          ...theme.mixins.transform("translateX(26px)")
        }
      }))()
    ),

    slider: css(
      (() => ({
        position: "absolute",
        cursor: "pointer",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "#ccc",
        backgroundImage: `linear-gradient(to right , rgba(82, 82, 82, 0.87), rgba(255, 177, 2, 0.67))`,
        ...theme.mixins.transition(".4s"),
        borderRadius: "34px",
        ":before": {
          position: "absolute",
          content: '""',
          height: "26px",
          width: "26px",
          left: "4px",
          bottom: "4px",
          backgroundColor: `${image ? `transparent` : "white"}`,
          borderRadius: "34px",
          backgroundImage: `${image ? `url(${image})` : "none"}`,
          ...theme.mixins.transition(".4s")
        }
      }))()
    )
  };

  return (
    <div
      onClick={toggleSwitch}
      data-testid="onOffToggle"
      className="switch"
      css={classes.toggle}
    >
      <div css={classes.switch}>
        <input type="checkbox" css={classes.input} checked={checked} readOnly data-testid="input" />
        <span css={classes.slider} className="slider" />
      </div>
    </div>
  );
};

BaseOnOffToggle.propTypes = propTypes;
BaseOnOffToggle.defaultProps = defaultProps;

export default BaseOnOffToggle;
