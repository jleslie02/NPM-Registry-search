// @flow weak
export default function createMixins() {
  function boxShadow(shadow) {
    return {
      WebkitBoxShadow: shadow,
      boxShadow: shadow,
      MozBoxShadow: shadow
    };
  }

  function transition(t) {
    return {
      WebkitTransition: t,
      MozTransition: t,
      OTransition: t,
      transition: t
    };
  }

  function transform(t) {
    return {
      WebkitTransform: t,
      MozTransform: t,
      OTransform: t,
      transform: t
    };
  }

  // Source: https://gist.github.com/jayj/4012969

  // --------------------------------------------------
  // Flexbox LESS mixins
  // The spec: http://www.w3.org/TR/css3-flexbox
  // --------------------------------------------------

  function flexDisplay() {
    return {
      display: 'flex'
    };
  }

  // The 'flex' shorthand
  // - applies to: flex items
  // <positive-number>, initial, auto, or none
  function flex(param) {
    let columns = param;
    if (!param) columns = 'initial';

    return {
      WebkitFlex: columns,
      MozFlex: columns,
      MsFlex: columns,
      flex: columns
    };
  }

  // Flex Flow Direction
  // - applies to: flex containers
  // row | row-reverse | column | column-reverse
  function flexDirection(param) {
    let direction = param;
    if (!param) direction = 'row';

    return {
      WebkitflexDirection: direction,
      MozflexDirection: direction,
      MsflexDirection: direction,
      flexDirection: direction
    };
  }

  // Flex Line Wrapping
  // - applies to: flex containers
  // nowrap | wrap | wrap-reverse
  function flexWrap(param) {
    let wrap = param;
    if (!param) wrap = 'nowrap';

    return {
      WebkitFlexWrap: wrap,
      MozFlexWrap: wrap,
      MsFlexWrap: wrap,
      flexWrap: wrap
    };
  }

  // Flex Direction and Wrap
  // - applies to: flex containers
  // <flex-direction> || <flex-wrap>
  function flexFlow(param) {
    let flow = param;
    if (!param) flow = 'initial';

    return {
      WebkitflexFlow: flow,
      MozflexFlow: flow,
      MsflexFlow: flow,
      flexFlow: flow
    };
  }

  // Display Order
  // - applies to: flex items
  // <integer>
  function flexOrder(param) {
    let order = param;
    if (!param) order = '0';

    return {
      WebkitFlexOrder: order,
      MozFlexOrder: order,
      MsFlexOrder: order,
      flexOrder: order
    };
  }

  // Flex grow factor
  // - applies to: flex items
  // <number>
  function flexGrow(param) {
    let growth = param;
    if (!param) growth = '0';

    return {
      WebkitFlexGrow: growth,
      MozFlexGrow: growth,
      MsFlexGrow: growth,
      flexGrow: growth
    };
  }

  // Flex shrink
  // - applies to: flex item shrink factor
  // <number>
  function flexShrink(param) {
    let shrink = param;
    if (!param) shrink = '0';

    return {
      WebkitFlexShrink: shrink,
      MozFlexShrink: shrink,
      MsFlexShrink: shrink,
      flexShrink: shrink
    };
  }

  // Flex basis
  // - the initial main size of the flex item
  // - applies to: flex itemsnitial main size of the flex item
  // <width>
  function flexBasis(param) {
    let basis = param;
    if (!param) basis = 'auto';

    return {
      WebkitFlexBasis: basis,
      MozFlexBasis: basis,
      MsFlexBasis: basis,
      flexBasis: basis
    };
  }

  // Axis Alignment
  // - applies to: flex containers
  // flex-start | flex-end | center | space-between | space-around
  function justifyContent(param) {
    let justify = param;
    if (!param) justify = 'flex-start';

    return {
      WebkitJustifyContent: justify,
      MozJustifyContent: justify,
      MsJustifyContent: justify,
      justifyContent: justify
    };
  }

  // Packing Flex Lines
  // - applies to: multi-line flex containers
  // flex-start | flex-end | center | space-between | space-around | stretch
  function alignContent(param) {
    let align = param;
    if (!param) align = 'stretch';

    return {
      WebkitAlignContent: align,
      MozAlignContent: align,
      MsAlignContent: align,
      alignContent: align
    };
  }

  // Cross-axis Alignment
  // - applies to: flex containers
  // flex-start | flex-end | center | baseline | stretch
  function alignItems(param) {
    let align = param;
    if (!param) align = 'stretch';

    return {
      WebkitAlignItems: align,
      MozAlignItems: align,
      MsAlignItems: align,
      alignItems: align
    };
  }

  // Cross-axis Alignment
  // - applies to: flex items
  // auto | flex-start | flex-end | center | baseline | stretch
  function alignSelf(param) {
    let align = param;
    if (!param) align = 'auto';

    return {
      WebkitAlignSelf: align,
      MozAlignSelf: align,
      MsAlignSelf: align,
      alignSelf: align
    };
  }

  function placeholder(color, fontSize) {
    return {
      '&::-webkit-input-placeholder': {
        color,
        fontSize,
        fontWeight: '200',
        marginBottom: '20px'
      },
      '&:-moz-placeholder': {
        color,
        fontSize,
        fontWeight: '200',
        marginBottom: '20px'
      },
      '&::-moz-placeholder': {
        color,
        fontSize,
        fontWeight: '200'
      },
      '&:-ms-input-placeholder': {
        color,
        fontSize,
        fontWeight: '200',
        marginBottom: '20px'
      },
      '&::-ms-input-placeholder': {
        color,
        fontSize,
        fontWeight: '200',
        marginBottom: '20px'
      }
    };
  }

  function ellipsify() {
    return {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };
  }

  function userSelect() {
    return {
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none'
    };
  }

  function flexCenter() {
    return {
      ...flexDisplay(),
      ...alignItems('center'),
      ...justifyContent('center')
    };
  }

  return {
    boxShadow,
    transition,
    transform,
    flexDisplay,
    alignSelf,
    alignContent,
    alignItems,
    justifyContent,
    flexDirection,
    flexGrow,
    flexShrink,
    flex,
    flexBasis,
    flexWrap,
    flexFlow,
    flexOrder,
    placeholder,
    ellipsify,
    flexCenter,
    userSelect
  };
}
