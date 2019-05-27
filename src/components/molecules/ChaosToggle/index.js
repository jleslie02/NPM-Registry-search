/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { withRouter } from 'react-router';
import internet from '../../../assets/internet.svg';
import clock from '../../../assets/clock.svg';
import jsonFormat from '../../../assets/json.svg';
import activeBug from '../../../assets/active-virus.svg';
import bug from '../../../assets/clean-virus.svg';

const ChaosToggle = props => {
  // Define open or closed state
  const [open, toggleOpen] = useState(false);
  // Define styles
  const { theme, active, toggleChaos } = props;

  const classes = {
    chaosToggle: css(
      (() => ({
        position: 'relative',
        height: '50px',
        padding: '0 20px',
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center'),
        ...theme.mixins.justifyContent('space-between')
      }))()
    ),

    trigger: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center'),
        cursor: 'pointer',
        '> img': {
          width: '54px'
        }
      }))()
    ),

    icons: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center'),
        position: 'absolute',
        top: '54px',
        height: '0',
        overflow: 'hidden',
        padding: '0',
        border: '0 solid rgba(0, 0, 0, 0.39)',
        left: '-35%',
        ...theme.mixins.transition('all 0.4s ease-in-out'),
        zIndex: '2',
        background: '#ffffff',
        '&.open': {
          height: '33px',
          border: '1px solid rgba(0, 0, 0, 0.39)',
          padding: '7px 15px',
          borderRadius: '15px',
          ...theme.mixins.transition('all 0.4s ease-in-out')
        },
        '> .fa': {
          width: '33px',
          fontSize: '31px',
          color: '#d83c3c',
          marginRight: '10px',
          cursor: 'pointer'
        },
        '> div': {
          cursor: 'pointer',
          height: '33px',
          width: '33px',
          ':not(:last-child)': {
            marginRight: '10px'
          },
          backgroundSize: 'contain'
        },
        '> .internet': {
          backgroundImage: `url(${internet})`
        },
        '> .clock': {
          backgroundImage: `url(${clock})`
        },
        '> .json': {
          backgroundImage: `url(${jsonFormat})`
        }
      }))()
    )
  };

  // utilities function
  const onChange = chaos => {
    toggleOpen(false);
    toggleChaos(chaos);
  };

  const images = [
    { name: 'internet', link: internet },
    { name: 'clock', link: clock },
    { name: 'json', link: jsonFormat }
  ];

  return (
    <div
      data-gm="chaosToggle"
      className="chaosToggle"
      css={classes.chaosToggle}
    >
      {/* Open the chaos options */}
      <div
        css={classes.trigger}
        onClick={() => toggleOpen(!open)}
      >
        <img src={active ? activeBug : bug} alt="mascot" />
      </div>
      {/* List out all the chaos options */}
      <div
        css={classes.icons}
        className={`${open ? 'open' : ''}`}
      >
        <i
          className="fa fa-ban"
          onClick={() => onChange(null)}
        />
        {images.map(image => {
          return (
            <div
              key={`${image.name}-chaos`}
              css={classes.image}
              className={image.name}
              onClick={() => onChange(image.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(ChaosToggle);
