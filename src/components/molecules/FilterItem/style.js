/* eslint-disable import/prefer-default-export */
/* @jsx jsx */
import { jsx, css } from '@emotion/core';

// Define styles
export const styles = theme => {
  return {
    filterItem: css(
      (() => ({
        maxWidth: '200px',
        minWidth: '130px',
        height: '55px',
        display: 'inline-block',
        marginRight: '-4px',
        boxSizing: 'border-box',
        color: theme.palette.filters.color,
        margin: '0 6px',
        padding: '7px',
        cursor: 'pointer',
        '&.open': {
          width: '200px',
          '.wrapper': {
            borderColor: '#daea70',
            backgroundColor: 'transparent'
          }
        }
      }))()
    ),

    wrapper: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems('center'),
        position: 'relative',
        border: `1px solid #e2e3e4`,
        borderRadius: `13px`,
        padding: `5px 10px 5px 5px`,
        '&.isSet': {
          background:
            theme.palette.filters.active.background,
          color: theme.palette.filters.active.color,
          '.icon': {
            border: '1px solid #fbfbfb'
          }
        }
      }))()
    ),

    icon: css(
      (() => ({
        height: '25px',
        width: '25px',
        borderRadius: '25px',
        fontSize: '13px',
        border: '1px solid #e2e3e4',
        ...theme.mixins.flexCenter(),
        marginRight: '5px'
      }))()
    ),
    description: css(
      (() => ({
        fontSize: '11px',
        '.name': {
          textTransform: 'uppercase'
        },
        '.value': {
          fontWeight: 'bold'
        }
      }))()
    ),

    reset: css(
      (() => ({
        position: 'absolute',
        right: '-15px',
        top: '0px',
        border: '1px solid #fbfbfb',
        borderRadius: '20px',
        width: '20px',
        height: '20px',
        background: '#e5e5e5',
        fontSize: '12px',
        ...theme.mixins.flexCenter()
      }))()
    ),

    // Filter body
    filterBody: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.flexDirection('column'),
        ...theme.mixins.justifyContent('space-between'),
        position: 'absolute',
        border: '1px solid #e5e5e5',
        borderRadius: '4px',
        zIndex: '3',
        background: '#fff',
        height: 'auto',
        padding: '10px',
        marginTop: '3px',
        minWidth: '165px'
      }))()
    ),
    title: css(
      (() => ({
        fontSize: '11px',
        color: '#989696',
        maxWidth: '150px'
      }))()
    ),

    buttonGroup: css(
      (() => ({
        textAlign: 'center',
        borderTop: '1px solid #f1f1f1',
        paddingTop: '10px',
        '> button': {
          textTransform: 'uppercase',
          fontSize: '9px',
          padding: '4px 15px 3px',
          marginRight: '7px',
          border: '1px solid #e5e5e5',
          background: 'transparent',
          borderRadius: '3px'
        }
      }))()
    ),

    toggle: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.justifyContent('space-between'),
        margin: '18px 0',
        marginBottom: '5px',
        '> div': {
          flex: '1',
          height: '30px',
          display: 'flex',
          ...theme.mixins.flexCenter(),
          border: '1px solid #ccc',
          fontSize: '11px',
          borderRadius: '8px',
          color: '#505050',
          '&.selected': {
            background: 'rgba(97, 152, 23, 0.67)',
            color: 'white',
            ...theme.mixins.boxShadow(
              'inset -1px 0px 8px 0px rgba(76, 105, 38, 0.67)'
            )
          },
          '&:nth-of-type(1)': {
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0'
          },
          '&:nth-of-type(2)': {
            borderLeft: 'none',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0'
          }
        }
      }))()
    )
  };
};
