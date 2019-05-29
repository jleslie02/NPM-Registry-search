/* @jsx jsx */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool
};

const defaultProps = {
  message: "",
  isError: false
};

const StatefulAlerts = props => {
  const { isError, message, theme } = props;
  const classes = {
    alert: css(
      (() => ({
        height: "70px",
        padding: "0 20px",
        background: "rgba(253, 116, 116, 0.57)",
        color: theme.palette.alert.color,
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems("center")
      }))()
    )
  };
  if (!isError) return null;

  return (
    <div data-testid="alerts" css={classes.alert}>
      {message}
    </div>
  );
};

StatefulAlerts.propTypes = propTypes;
StatefulAlerts.defaultProps = defaultProps;

export default StatefulAlerts;
