/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import Tag from '../../atoms/Tag';

const propTypes = {
  theme: PropTypes.instanceOf(Object),
  score: PropTypes.instanceOf(Object),
  flags: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Object)
};

const defaultProps = {
  theme: { mixins: {}, layout: {}, colors: {} },
  score: {},
  flags: null,
  data: {}
};

const Registry = props => {
  const { score, data, flags, theme } = props;

  // Define styles
  const classes = {
    registryItem: css({
      ...theme.mixins.flexDisplay(),
      ...theme.mixins.justifyContent('space-between'),
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      margin: '25px 0 0 0',
      paddingBottom: '25px',
      borderBottom: '1px solid #bdbdbd',
      '@media (max-width: 650px)': {
        display: 'inline-block'
      }
    }),
    nameImage: css(
      (() => ({
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        border: '1px solid #908a8a',
        color: '#908a8a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        textTransform: 'uppercase',
        fontWeight: '900'
      }))()
    ),
    description: css(
      (() => ({
        flex: '1',
        width: '100%',
        overflow: 'hidden',
        paddingLeft: '30px',
        color: theme.palette.registry.item.color,
        '@media (max-width: 650px)': {
          paddingLeft: '10px'
        }
      }))()
    ),
    stableTag: css((() => ({}))()),
    stable: css(
      (() => ({
        border: '1px solid',
        borderRadius: '6px',
        padding: '3px 13px',
        textTransform: 'uppercase',
        fontSize: '10px',
        fontWeight: '600',
        background: 'rgba(255, 46, 46, 0.65)',
        color: 'white',
        ...theme.mixins.boxShadow(
          'inset -1px 0px 8px 0px #e84848'
        ),
        '@media (max-width: 650px)': {
          marginLeft: '6px',
          marginTop: '10px'
        }
      }))()
    ),
    keywords: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.flexWrap('wrap'),
        marginLeft: '-10px',
        '> div': {
          margin: '5px'
        }
      }))()
    ),
    date: css(
      (() => ({
        position: 'absolute'
      }))()
    ),
    mainName: css(
      (() => ({
        cursor: 'pointer',
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('baseline'),
        '> span': {
          ...theme.mixins.ellipsify(),
          maxWidth: '400px',
          color: theme.palette.registry.item.name,
          fontSize: '22px',
          fontWeight: 'bold'
        },
        '> div': {
          color: '#a7adb5',
          fontSize: '16px',
          marginLeft: '10px',
          letterSpacing: '1px'
        }
      }))()
    ),
    contact: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        margin: '6px 0',
        fontSize: '15px',
        '.email': {
          marginLeft: '15px',
          color: '#55a8fd'
        },
        '.user': {
          color: '#7f92a9'
        },
        ' .fa': {
          ...theme.layout.iconFont,
          WebkitTextStrokeColor: '#828282',
          fontSize: '15px',
          marginRight: '5px',
          '&.fa-envelope': {
            WebkitTextStrokeColor: '#55a8fd'
          }
        }
      }))()
    ),
    stats: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.flexWrap('wrap'),
        fontSize: '12px',
        margin: '8px 0',

        '.statWrapper': {
          ...theme.mixins.flexDisplay(),
          ...theme.mixins.alignItems('center'),
          '@media (max-width: 650px)': {
            display: 'inline-grid',
            marginRight: '10px'
          }
        },
        '.statName': {
          textTransform: 'capitalize',
          '&.quality': {
            color: '#8956FF'
          },
          '&.maintenance': {
            color: '#cb3837'
          },
          '&.popularity': {
            color: '#29ABE2'
          }
        },
        '.statNumber': {
          fontWeight: 'bold',
          marginLeft: '4px'
        }
      }))()
    ),
    separate: css(
      (() => ({
        width: '3px',
        height: '3px',
        border: '1px solid #e2e2e2',
        borderRadius: '3px',
        background: '#e2e2e2',
        margin: '0 20px',
        '@media (max-width: 650px)': {
          display: 'none'
        }
      }))()
    ),
    summary: css(
      (() => ({
        margin: '20px 0'
      }))()
    )
  };
  return (
    <div
      data-gm="registry-item"
      className="registryItem"
      css={classes.registryItem}
    >
      <div css={classes.nameImage}>
        {((data.author || {}).name || 'unknown')[0]}
      </div>
      <div css={classes.description}>
        <div css={classes.header}>
          {/* PACKAGE NAME */}
          <div
            css={classes.mainName}
            onClick={() => {
              if (data.links.npm) {
                window.open(data.links.npm, '_blank');
              }
              return null;
            }}
          >
            <span>{data.name}</span>
            <div>{data.version}</div>
          </div>
          {/* AUTHOR DESC */}
          <div css={classes.contact}>
            <div className="user">
              <span className="fa fa-user" />
              {(data.author || {}).name || 'unknown'}
            </div>
            {data.author && data.author.email && (
              <div className="email">
                <span className="fa fa-envelope" />
                {data.author.email}
              </div>
            )}
          </div>
          {/* PACKAGE STATS */}
          <div css={classes.stats}>
            {Object.keys((score || {}).detail || {}).map(
              (stat, idx) => {
                return (
                  <div
                    key={`${stat}-${data.name}`}
                    className="statWrapper"
                  >
                    <span className={`${stat} statName`}>
                      {stat}
                    </span>
                    <span className="statNumber">
                      {Math.round(score.detail[stat] * 100)}
                      %
                    </span>
                    {idx < 2 && (
                      <div css={classes.separate} />
                    )}
                  </div>
                );
              }
            )}
          </div>
          {/* PACKAGE DESCRIPTION */}
          {data.description && (
            <div css={classes.summary}>
              {data.description}
            </div>
          )}
          {/* PACKAGE KEYWORDS */}
          {data.keywords && data.keywords.length > 0 && (
            <div css={classes.keywords}>
              {data.keywords.map((word, idx) => {
                return (
                  <Tag
                    theme={theme}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${data.name}-key-${word}-${idx}`}
                    label={word}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div css={classes.stableTag}>
        {Object.keys(flags || {}).map(flag => {
          return (
            <span
              key={`${data.name}-key-${flag}`}
              css={classes.stable}
            >
              {flag}
            </span>
          );
        })}
      </div>
      <div css={classes.date} />
    </div>
  );
};

Registry.propTypes = propTypes;
Registry.defaultProps = defaultProps;

export default Registry;
