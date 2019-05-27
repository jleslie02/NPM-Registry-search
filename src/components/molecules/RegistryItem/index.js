/* eslint-disable no-unused-vars */
/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Tag from '../../atoms/Tag';

const Registry = props => {
  const { score, data, description, theme } = props;

  // Define styles
  const classes = {
    registryItem: css({
      ...theme.mixins.flexDisplay(),
      ...theme.mixins.justifyContent('space-between'),
      position: 'relative',
      width: '100%',
      margin: '25px 0 0 0',
      paddingBottom: '25px',
      borderBottom: '1px solid #bdbdbd'
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
        overflow: 'hidden'
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
        )
      }))()
    ),
    keywords: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.flexWrap('wrap'),
        '> div': {
          margin: '5px',
          ':first-child': {
            marginLeft: '0'
          }
        }
      }))()
    ),
    date: css(
      (() => ({
        position: 'absolute'
      }))()
    )
  };

  return (
    <div
      data-gm="registry-item"
      className="registryItem"
      css={classes.registryItem}
    >
      <div css={classes.nameImage}>{data.name[0]}</div>
      <div css={classes.description}>
        <div css={classes.header}>
          {/* PACKAGE NAME */}
          <div css={classes.mainName}>
            <span>{data.name}</span>
            <div css={classes.version}>{data.version}</div>
          </div>
          {/* AUTHOR DESC */}
          <div css={classes.contact}>
            {data.author && data.author.name && (
              <div>
                <span className="fa fa-unknown" />
                {data.name}
              </div>
            )}
            {data.author && data.author.email && (
              <div>
                <span className="fa fa-email" />
                {data.author.email}
              </div>
            )}
          </div>
          {/* PACKAGE STATS */}
          <div css={classes.stats}>
            {Object.keys((score || {}).detail || {}).map(
              (stat, idx) => {
                return (
                  <div key={`${stat}-${data.name}`}>
                    <span css={classes.statName}>
                      {stat}
                    </span>
                    <span css={classes.statName}>
                      {Math.round(score.detail[stat] * 100)}
                    </span>
                    <div css={classes.separate} />
                  </div>
                );
              }
            )}
          </div>
          {/* PACKAGE DESCRIPTION */}
          {data.description && (
            <div css={classes.stats}>
              {data.description}
            </div>
          )}
          {/* PACKAGE DESCRIPTION */}
          {data.keywords && data.keywords.length > 0 && (
            <div css={classes.keywords}>
              {data.keywords.map(word => {
                return (
                  <Tag
                    theme={theme}
                    key={`${data.name}-key-${word}`}
                    label={word}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div css={classes.stableTag}>
        <div css={classes.stable}>unstable</div>
      </div>
      <div css={classes.date} />
    </div>
  );
};

export default Registry;
