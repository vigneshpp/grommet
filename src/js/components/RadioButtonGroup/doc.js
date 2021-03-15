import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = RadioButtonGroup => {
  const DocumentedRadioButtonGroup = describe(RadioButtonGroup)
    .availableAt(getAvailableAtBadge('RadioButtonGroup', 'Input'))
    .description('A group of radio buttons.')
    .usage(
      `import { RadioButtonGroup } from 'grommet';
<RadioButtonGroup />`,
    )
    .intrinsicElement('div');

  DocumentedRadioButtonGroup.propTypes = {
    children: PropTypes.func.description(
      `Function that will be called to render the visual representation.
      It will be passed an object indicating whether the button is checked. It
      should return a react element.
      For example:
      \`children={(option, { checked }) => <Box ...>{...}</Box>}\`
      `,
    ),
    disabled: PropTypes.bool
      .description(`Disables all options.`)
      .defaultValue(false),
    name: PropTypes.string.description(
      `The DOM name attribute value to use for the underlying <input/> 
      elements.`,
    ).isRequired,
    onChange: PropTypes.func.description(
      `Function that will be called when the user clicks on one of the radio
      buttons. It will be passed a React event object.`,
    ),
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.arrayOf(PropTypes.bool),
      PropTypes.arrayOf(
        PropTypes.shape({
          disabled: PropTypes.bool,
          id: PropTypes.string,
          label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
          value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
          ]).isRequired,
        }),
      ),
    ]).description(`Options can be either a string, boolean, number 
      or an object. Each option is rendered as a single RadioButton.`)
      .isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
    ]).description(`Currently selected option value.`),
  };

  return DocumentedRadioButtonGroup;
};

export const themeDoc = {
  'radioButtonGroup.container': {
    description: 'Any valid Box props for the RadioButtonGroup container.',
    type: 'object',
    defaultValue: 'undefined',
  },
};
