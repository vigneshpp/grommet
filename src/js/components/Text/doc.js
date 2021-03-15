import { describe, PropTypes } from 'react-desc';

import {
  colorPropType,
  genericProps,
  MARGIN_SIZES,
} from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';
import { themeDocUtils } from '../../utils/themeDocUtils';

export const doc = Text => {
  const DocumentedText = describe(Text)
    .availableAt(getAvailableAtBadge('Text', 'Type'))
    .description('Arbitrary text.')
    .usage(
      `import { Text } from 'grommet';
<Text />`,
    )
    .intrinsicElement('span');

  DocumentedText.propTypes = {
    ...genericProps,
    color: colorPropType.description(
      'A color identifier to use for the text color.',
    ),
    margin: PropTypes.oneOfType([
      PropTypes.oneOf(['none', ...MARGIN_SIZES]),
      PropTypes.shape({
        bottom: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        end: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        horizontal: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        left: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        right: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        start: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        top: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
        vertical: PropTypes.oneOfType([
          PropTypes.oneOf(MARGIN_SIZES),
          PropTypes.string,
        ]),
      }),
      PropTypes.string,
    ]).description(`The amount of margin around the component. An object can be 
    specified to distinguish horizontal margin, vertical margin, and margin on 
    a particular side. For vertical margin to be applied, Text needs to be 
    contained within a layout component (such as Box or a generic div) or 
    behave as a div (by applying as="div" or a display style of 
    inline-block).`),
    size: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ]),
      PropTypes.string,
    ])
      .description(`The font size and line space height of the text.`)
      .defaultValue('medium'),
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `The DOM tag to use for the element. NOTE: This is deprecated in favor
         of indicating the DOM tag via the 'as' property.`,
    ),
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element,
    ])
      .description(`The DOM tag or react component to use for the element.`)
      .defaultValue('span'),
    textAlign: PropTypes.oneOf(['start', 'center', 'end'])
      .description('How to align the text inside the component.')
      .defaultValue('start'),
    truncate: PropTypes.bool
      .description(
        `Restrict the text to a single line and truncate with ellipsis if it
is too long to all fit. For truncate to be applied, Text needs to be 
contained within a layout component (such as Box or a generic div).`,
      )
      .defaultValue(false),
    weight: PropTypes.oneOfType([
      PropTypes.oneOf(['normal', 'bold']),
      PropTypes.number,
    ]).description('Font weight'),
    wordBreak: PropTypes.oneOf([
      'normal',
      'break-all',
      'keep-all',
      'break-word',
    ])
      .description(
        'Whether words should break when reaching the end of a line.',
      )
      .defaultValue('normal'),
  };

  return DocumentedText;
};

export const themeDoc = {
  'global.colors.text': {
    description: `The text color used for Text. In order for this to take 
    effect, global.colors.background needs to be defined.`,
    type: 'object | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }",
  },
  'text.font.family': {
    description: 'The font family to use for Text.',
    type: 'string',
    defaultValue: undefined,
  },
  text: {
    description: `The possible sizes of the text in terms of its font-size and 
line-height.`,
    type: 'object',
    defaultValue: `{
      xsmall: {
        size: '12px',
        height: '18px',
       },
      small: {
        size: '14px',
        height: '20px',
       },
      medium: {
        size: '18px',
        height: '24px',
      },
      large: {
        size: '22px',
        height: '28px',
      },
      xlarge: {
        size: '26px',
        height: '32px',
      },
      xxlarge: {
        size: '34px',
        height: '40px',
      },
    }`,
  },
  'text.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  ...themeDocUtils.edgeStyle('The possible sizes for margin.'),
};
