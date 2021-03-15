import { describe, PropTypes } from 'react-desc';

import {
  backgroundDoc,
  elevationPropType,
  genericProps,
  getBorderPropType,
  hoverIndicatorPropType,
  padPropType,
  roundPropType,
} from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';
import { themeDocUtils } from '../../utils/themeDocUtils';

export const OVERFLOW_VALUES = ['auto', 'hidden', 'scroll', 'visible'];

const ANIMATION_TYPE = PropTypes.oneOf([
  'fadeIn',
  'fadeOut',
  'jiggle',
  'pulse',
  'rotateLeft',
  'rotateRight',
  'slideUp',
  'slideDown',
  'slideLeft',
  'slideRight',
  'zoomIn',
  'zoomOut',
]);
const ANIMATION_SHAPE = PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: PropTypes.number,
  duration: PropTypes.number,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
});

const BORDER_SHAPE = getBorderPropType({ includeBetween: true });

// if you update values here, make sure to update in Drop/doc too.
const overflowPropType = PropTypes.oneOfType([
  PropTypes.oneOf(OVERFLOW_VALUES),
  PropTypes.shape({
    horizontal: PropTypes.oneOf(OVERFLOW_VALUES),
    vertical: PropTypes.oneOf(OVERFLOW_VALUES),
  }),
  PropTypes.string,
]);

export const doc = Box => {
  const DocumentedBox = describe(Box)
    .availableAt(getAvailableAtBadge('Box', 'Layout'))
    .description(
      `A container that lays out its contents in one direction. Box
      provides CSS flexbox capabilities for layout, as well as general
      styling of things like background color, border, and animation.`,
    )
    .usage("import { Box } from 'grommet';\n<Box />")
    .intrinsicElement('div');
  DocumentedBox.propTypes = {
    ...genericProps,
    align: PropTypes.oneOf([
      'start',
      'center',
      'end',
      'baseline',
      'stretch',
    ]).description('How to align the contents along the cross axis.'),
    alignContent: PropTypes.oneOf([
      'start',
      'center',
      'end',
      'between',
      'around',
      'stretch',
    ])
      .description(
        `How to align the contents when there is extra space in
        the cross axis.`,
      )
      .defaultValue('stretch'),
    animation: PropTypes.oneOfType([
      ANIMATION_TYPE,
      ANIMATION_SHAPE,
      PropTypes.arrayOf(PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE])),
    ]).description(`Animation effect(s) to use. 'duration' and 'delay' should
        be in milliseconds. 'jiggle' and 'pulse' types are intended for
        small elements, like icons.`),
    background: backgroundDoc,
    basis: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'full',
        '1/2',
        '1/3',
        '2/3',
        '1/4',
        '2/4',
        '3/4',
        'auto',
      ]),
      PropTypes.string,
    ]).description("A fixed or relative size along its container's main axis."),
    border: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([
        'top',
        'left',
        'bottom',
        'right',
        'start',
        'end',
        'horizontal',
        'vertical',
        'all',
        'between',
      ]),
      BORDER_SHAPE,
      PropTypes.arrayOf(BORDER_SHAPE),
    ]).description(
      `Include a border. 'between' will place a border in the gap between
      child elements. You must have a 'gap' to use 'between'.`,
    ),
    direction: PropTypes.oneOf([
      'row',
      'column',
      'row-responsive',
      'row-reverse',
      'column-reverse',
    ])
      .description('The orientation to layout the child components in.')
      .defaultValue('column'),
    elevation: elevationPropType
      .description(
        `Elevated height above the underlying context, indicated
        via a drop shadow.`,
      )
      .defaultValue('none'),
    flex: PropTypes.oneOfType([
      PropTypes.oneOf(['grow', 'shrink']),
      PropTypes.bool,
      PropTypes.shape({
        grow: PropTypes.number,
        shrink: PropTypes.number,
      }),
    ]).description(
      'Whether flex-grow and/or flex-shrink is true and at a desired factor.',
    ),
    fill: PropTypes.oneOfType([
      PropTypes.oneOf(['horizontal', 'vertical']),
      PropTypes.bool,
    ]).description(
      'Whether the width and/or height should fill the container.',
    ),
    focusIndicator: PropTypes.bool
      .description(
        `When interactive via 'onClick', whether it should receive a focus
        outline.`,
      )
      .defaultValue(true),
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([
        'none',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
      ]),
      PropTypes.string,
    ]).description(`The amount of spacing between child elements. This
        should not be used in conjunction with 'wrap' as the gap elements
        will not wrap gracefully. If a child is a Fragment,
        Box will not add a gap between the children of the Fragment.`),
    height: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
      ]),
      PropTypes.string,
      PropTypes.shape({
        min: PropTypes.oneOfType([
          PropTypes.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          PropTypes.string,
        ]),
        max: PropTypes.oneOfType([
          PropTypes.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          PropTypes.string,
        ]),
      }),
    ]).description('A fixed height.'),
    hoverIndicator: hoverIndicatorPropType
      .description(
        `When 'onClick' has been specified, the hover indicator to apply
        when the user is mousing over the box.`,
      )
      .defaultValue(false),
    justify: PropTypes.oneOf([
      'around',
      'between',
      'center',
      'end',
      'evenly',
      'start',
      'stretch',
    ])
      .description('How to align the contents along the main axis.')
      .defaultValue('stretch'),
    onClick: PropTypes.func.description(
      `Click handler. Setting this property adds additional attributes to
      the DOM for accessibility.`,
    ),
    overflow: overflowPropType.description('box overflow.'),
    pad: padPropType,
    responsive: PropTypes.bool
      .description(
        `Whether margin, pad, and border
      sizes should be scaled for mobile environments.`,
      )
      .defaultValue(true),
    round: roundPropType,
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `The DOM tag to use for the element. NOTE: This is deprecated in favor
of indicating the DOM tag via the 'as' property.`,
    ),
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .description('The DOM tag or react component to use for the element.')
      .defaultValue('div'),
    width: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
      ]),
      PropTypes.string,
      PropTypes.shape({
        width: PropTypes.oneOfType([
          PropTypes.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          PropTypes.string,
        ]),
        min: PropTypes.oneOfType([
          PropTypes.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          PropTypes.string,
        ]),
        max: PropTypes.oneOfType([
          PropTypes.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          PropTypes.string,
        ]),
      }),
    ]).description('A fixed width.'),
    wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['reverse'])])
      .description(`Whether children can wrap if they can't all fit.`)
      .defaultValue(false),
  };
  return DocumentedBox;
};

export const themeDoc = {
  'global.animation': {
    description: 'The animation configuration for the Box.',
    type: 'object',
    defaultValue: `{
  duration: '1s',
  jiggle: {
    duration: '0.1s',
  },
}`,
  },
  'global.borderSize': {
    description: 'The possible border sizes in the Box.',
    type: 'object',
    defaultValue: `{
  xsmall: '1px',
  small: '2px',
  medium: '4px',
  large: '12px',
  xlarge: '24px,
}`,
  },
  'global.elevation': {
    description: 'The possible shadows in Box elevation.',
    type: 'object',
    defaultValue: `{
  light: {
    none: 'none',
    xsmall: '0px 1px 2px rgba(100, 100, 100, 0.50)',
    small: '0px 2px 4px rgba(100, 100, 100, 0.50)',
    medium: '0px 3px 8px rgba(100, 100, 100, 0.50)',
    large: '0px 6px 12px rgba(100, 100, 100, 0.50)',
    xlarge: '0px 8px 16px rgba(100, 100, 100, 0.50)',
  },
  dark: {
    none: 'none',
    xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
    small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
    medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
    large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
    xlarge: '0px 10px 24px rgba(255, 255, 255, 0.40)',
  },
}`,
  },
  'global.colors.border': {
    description: 'The color of the border',
    type: 'string | { dark: string, light: string }',
    defaultValue:
      '{ dark: rgba(255, 255, 255, 0.33), light: rgba(0, 0, 0, 0.33), }',
  },
  'global.hover.background.color': {
    description: 'The color of the default background when hovering',
    type: 'string | { dark: string, light: string }',
    defaultValue: 'active',
  },
  'global.hover.background.opacity': {
    description: 'The opacity of the default background when hovering',
    type: 'string | { dark: string, light: string }',
    defaultValue: 'medium',
  },
  'global.hover.color': {
    description: 'The color of the default background when hovering',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: "white", light: "black" }',
  },
  'global.opacity.medium': {
    description: 'The value used when background opacity is set to true.',
    type: 'number',
    defaultValue: '0.4',
  },
  'global.size': {
    description: 'The possible sizes for width, height, and basis.',
    type: 'object',
    defaultValue: `{
  xxsmall: '48px',
  xsmall: '96px',
  small: '192px',
  medium: '384px',
  large: '768px',
  xlarge: '1152px',
  xxlarge: '1536px',
  full: '100%',
}`,
  },
  'box.extend': {
    description: 'Any additional style for the Box.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'box.responsiveBreakpoint': {
    description: `The actual breakpoint to trigger changes in the border, 
    direction, gap, margin, pad, and round.`,
    type: 'string',
    defaultValue: 'small',
  },
  ...themeDocUtils.edgeStyle(
    'The possible sizes for any of gap, margin, and pad.',
  ),
  ...themeDocUtils.breakpointStyle(
    `The possible breakpoints that could affect border, direction, gap, margin, 
    pad, and round.`,
  ),
};
