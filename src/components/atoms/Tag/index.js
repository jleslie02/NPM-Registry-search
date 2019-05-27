/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string
};
const defaultProps = {
  label: ''
};

export const StatelessTag = props => {
  const { label, theme } = props;

  const tag = css(
    (() => ({
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '14px',
      border: '1px solid #c0c4d2',
      color: 'rgba(80, 80, 80, 0.87)',
      cursor: 'pointer',
      backgroundColor: '#fff',
      ...theme.mixins.flexCenter()
    }))()
  );

  return (
    <div css={tag} data-gm="tag">
      {' '}
      {label}{' '}
    </div>
  );
};

StatelessTag.propTypes = propTypes;

StatelessTag.propTypes = propTypes;
StatelessTag.defaultProps = defaultProps;
export default StatelessTag;
