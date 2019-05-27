/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';

const propTypes = {
  loading: PropTypes.bool
};

const loading = keyframes`
  from {
    left: 50%; width: 0;z-index:100;
  }
  33.3333% {
    left: 0; width: 100%;z-index: 10;
  }
  to {
    left: 0; width: 100%;
  }
`;

export const StatelessLoadingView = props => {
  const loadingStyle = css(
    (() => ({
      position: 'relative',
      width: '100%',
      height: '6px',
      backgroundImage: `linear-gradient(to right ,rgba(82,82,82,0.87),rgba(164, 230, 77, 0.67))`,
      '.bar': {
        content: `""`,
        display: 'inline',
        position: 'absolute',
        width: '0',
        height: '100%',
        left: '50%',
        textAlign: 'center',
        ':nth-child(1)': {
          backgroundImage: `linear-gradient(to right ,rgba(115, 109, 109, 0.87),rgba(255, 134, 10, 0.97))`,
          animation: `${
            props.loading
              ? `${loading} 2s linear 1s infinite`
              : 'none'
          }`
        },
        ':nth-child(2)': {
          backgroundImage: `linear-gradient(to right ,rgba(107, 97, 97, 0.87),rgba(255, 226, 21, 0.97))`,
          animation: `${
            props.loading
              ? `${loading} 2s linear 2s infinite`
              : 'none'
          }`
        }
      }
    }))()
  );

  return (
    <div className="load-bar" css={loadingStyle}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  );
};

StatelessLoadingView.propTypes = propTypes;
StatelessLoadingView.defaultProps = {
  loading: false
};

export default StatelessLoadingView;
