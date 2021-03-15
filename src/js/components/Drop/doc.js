import { describe, PropTypes } from 'react-desc';

import { OVERFLOW_VALUES } from '../Box/doc';

import { getAvailableAtBadge } from '../../utils/mixins';
import { themeDocUtils } from '../../utils/themeDocUtils';
import {
  backgroundDoc,
  roundPropType,
  marginProp,
} from '../../utils/prop-types';

// if you update values here, make sure to update in Box/doc too.
const dropOverflowPropTypes = PropTypes.oneOfType([
  PropTypes.oneOf(OVERFLOW_VALUES),
  PropTypes.shape({
    horizontal: PropTypes.oneOf(OVERFLOW_VALUES),
    vertical: PropTypes.oneOf(OVERFLOW_VALUES),
  }),
  PropTypes.string,
]);

export const doc = Drop => {
  const DocumentedDrop = describe(Drop)
    .availableAt(getAvailableAtBadge('Drop', 'Controls'))
    .description('A container that is overlaid next to a target.')
    .usage(
      "import { Drop } from 'grommet';\n<Drop target={reference}>...</Drop>",
    )
    .intrinsicElement('div');

  DocumentedDrop.propTypes = {
    align: PropTypes.shape({
      top: PropTypes.oneOf(['top', 'bottom']),
      bottom: PropTypes.oneOf(['top', 'bottom']),
      right: PropTypes.oneOf(['left', 'right']),
      left: PropTypes.oneOf(['left', 'right']),
    })
      .description(
        `How to align the drop with respect to the target element. Not 
        specifying a vertical or horizontal alignment will cause it to be 
        aligned in the center.`,
      )
      .defaultValue({
        top: 'top',
        left: 'left',
      }),
    background: backgroundDoc,
    elevation: PropTypes.oneOfType([
      PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ]).description(
      `Elevated height of the target, indicated via a drop shadow. 
      Only applicable if the Drop isn't plain.`,
    ),
    margin: marginProp,
    onClickOutside: PropTypes.func.description(
      'Function that will be invoked when the user clicks outside the drop.',
    ),
    onEsc: PropTypes.func.description(
      `Function that will be called when the user presses the escape key inside
       the drop.`,
    ),
    overflow: dropOverflowPropTypes
      .description('How to control the overflow inside the drop.')
      .defaultValue('auto'),
    plain: PropTypes.bool
      .description(
        `Whether the drop element should have no background, 
        elevation, margin or round.`,
      )
      .defaultValue(false),
    responsive: PropTypes.bool
      .description('Whether to dynamically re-place when resized.')
      .defaultValue(true),
    restrictFocus: PropTypes.bool
      .description('Whether the drop should control focus.')
      .defaultValue(false),
    round: roundPropType,
    stretch: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['align'])])
      .description(
        `If set to true the drop element will be stretched to at least match the
      width of the target element. If set to align the width of the drop element
      will be restricted to the width of the target element. The default is true
      because that is what most uses of Drop want, like Select and Menu.`,
      )
      .defaultValue(true),
    target: PropTypes.object.description(
      `Target where the drop will be aligned to. This should be a React 
      reference.`,
    ).isRequired,
    trapFocus: PropTypes.bool
      .description(`Traps keyboard focus inside of drop.`)
      .defaultValue(true),
  };

  return DocumentedDrop;
};

export const themeDoc = {
  'drop.maxHeight': {
    description: 'The max height of the Drop container.',
    type: 'string',
    defaultValue: undefined,
  },
  'global.drop.background': {
    description: 'The background color of Drop.',
    type: 'string | { dark: string, light: string }',
    defaultValue: `{
      dark: 'black',
      light: 'white',
    }`,
  },
  'global.drop.border.radius': {
    description: 'The border radius of the Drop container.',
    type: 'string',
    defaultValue: '0px',
  },
  'global.drop.extend': {
    description: 'Any additional style for Drop.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  ...themeDocUtils.edgeStyle('The possible sizes for the Drop margin.'),
  'global.drop.elevation': {
    description: `Elevated height above the underlying context, indicated
    via a drop shadow.`,
    type: 'string',
    defaultValue: 'small',
  },
  'global.drop.margin': {
    description: 'The margin of the drop from the target.',
    type: 'string | object',
    defaultValue: undefined,
  },
  'global.drop.shadowSize': {
    description: `Deprecated. Use 'global.drop.elevation' instead.`,
    type: 'string',
  },
  'global.drop.zIndex': {
    description: 'The stack order of the Drop.',
    type: 'number',
    defaultValue: 20,
  },
};
