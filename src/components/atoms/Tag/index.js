/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string
};
const defaultProps = {
  label: ""
};

export const StatelessTag = props => {
  const { label, theme } = props;

  const tag = css(
    (() => ({
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "14px",
      border: `1px solid #c0c4d2`,
      color: theme.palette.tag.color,
      cursor: "pointer",
      backgroundColor: theme.palette.tag.background,
      ...theme.mixins.flexCenter()
    }))()
  );

  return (
    <div css={tag} data-testid="tag">
      {" "}
      {label}
      {" "}
    </div>
  );
};

StatelessTag.propTypes = propTypes;

StatelessTag.propTypes = propTypes;
StatelessTag.defaultProps = defaultProps;
export default StatelessTag;
