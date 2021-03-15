import { describe, PropTypes } from 'react-desc';

import { genericProps } from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';
import { themeDocUtils } from '../../utils/themeDocUtils';

export const doc = Calendar => {
  const DocumentedCalendar = describe(Calendar)
    .availableAt(getAvailableAtBadge('Calendar', 'Visualizations'))
    .description(
      `A calendar of days displayed by month.
      It can be used to select a single date, a range of dates, or multiple
      individual dates.`,
    )
    .usage(
      `import { Calendar } from 'grommet';
<Calendar />`,
    )
    .intrinsicElement('div');

  DocumentedCalendar.propTypes = {
    ...genericProps,
    activeDate: PropTypes.oneOf(['start', 'end'])
      .description(
        `When using range, Whether the next date selection will affect the 
        start or end bound of the range.`,
      )
      .defaultValue('start'),
    animate: PropTypes.bool
      .description(
        `Whether to animate the calender as the user interacts with it.`,
      )
      .defaultValue(true),
    bounds: PropTypes.arrayOf(PropTypes.string)
      .description(`An array of two numbers indicating the limits on
        navigation in ISO8601 format`),
    children: PropTypes.func.description(
      `Function that will be called to render each day.
      It will be passed \`({date, day, isInRange, isSelected})\` where \`date\`
      is a string containing an ISO8601 date for the day being rendered, \`day\`
      is a number containing the day of the month being rendered, \`isInRange\`
      is a boolean indicating whether the date is within a selected range of
      dates, and \`isSelected\` is a boolean indicating whether this date
      is selected.`,
    ),
    date: PropTypes.string.description('The selected date in ISO8601 format'),
    dates: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    ).description(`Multiple selected dates in ISO8601 format.
      Items that are an array indicate a range of dates.`),
    disabled: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    ).description(`Multiple dates in ISO8601 format that should not be
        selectable. Items that are an array indicate a range of dates.`),
    daysOfWeek: PropTypes.bool
      .description(`Whether to show the days of the week.`)
      .defaultValue(false),
    fill: PropTypes.bool
      .description(`Whether the calendar should fill the parent container.`)
      .defaultValue(false),
    firstDayOfWeek: PropTypes.oneOf([0, 1])
      .description('The first day of the week. 0 for Sunday. 1 for Monday.')
      .defaultValue(0),
    header: PropTypes.func.description(
      `If specified, the entire calendar header will be managed by the caller.
The function passes the following options:

\`\`\`
  {
    date: Date,
    locale: string,
    onPreviousMonth: func,
    onNextMonth: func,
    previousInBound: bool,
    nextInBound: bool,
  }
\`\`\`

\`onPreviousMonth\` and \`onNextMonth\` are callbacks that will tell the
calendar to move between months.
\`previousInBound\` and \`nextInBound\` are booleans that tell, when using
\`bounds\`, if the current date is within that range. You can then use that
to disable the previous and next buttons.
`,
    ),
    locale: PropTypes.string
      .description('The locale to use.')
      .defaultValue('en-US'),
    onReference: PropTypes.func.description(
      `Called with an ISO8601 date when the user navigates to a different
       month.`,
    ),
    onSelect: PropTypes.func.description(`Called with an ISO8601 date when
      the user selects a day.
      For single select, make this the subsequent \`date\` property value.
      For multiple select or ranges, toggle values in \`dates\`.
      Not specifying this property makes the component read only.`),
    range: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['array'])])
      .description(
        `Whether to automatically manage multiple date selection as a range.
        When the user clicks the first date, onSelect will be called with that
        date. When the user selects another date, onSelect will be called with
        an array of two dates. If range = "array", then an array of dates will 
        be returned even when the start or end date of the range is undefined.`,
      )
      .defaultValue(false),
    reference: PropTypes.string.description(
      "The date to show if `date` isn't set, in ISO8601 format",
    ),
    showAdjacentDays: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['trim']),
    ])
      .description(
        `Whether to show the days from the previous and next months. 
        \`trim\` limits adjacent days shown to rows containing days in 
        the current month.`,
      )
      .defaultValue(true),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large']),
      PropTypes.string,
    ])
      .description('What size to make it.')
      .defaultValue('medium'),
  };

  return DocumentedCalendar;
};

export const themeDoc = {
  'calendar.day.extend': {
    description: 'Any additional style for the day of Calendar.',
    type: 'string | (props) => {}',
  },
  'calendar.extend': {
    description: 'Any additional style for the Calendar.',
    type: 'string | (props) => {}',
  },
  'calendar.heading.level': {
    description: 'The heading level used for the calendar.',
    type: 'number',
    defaultValue: '4',
  },
  'calendar.icons.next': {
    description: 'The icon to use for the next month navigation control.',
    type: 'element',
    defaultValue: '<Next />',
  },
  'calendar.icons.previous': {
    description: 'The icon to use for the previous month navigation control.',
    type: 'element',
    defaultValue: '<Previous />',
  },
  'calendar.icons.small.next': {
    description:
      'The icon to use for the next month navigation control when small.',
    type: 'element',
    defaultValue: '<FormNext />',
  },
  'calendar.icons.small.previous': {
    description:
      'The icon to use for the previous month navigation control when small.',
    type: 'element',
    defaultValue: '<FormPrevious />',
  },
  'calendar.large.daySize': {
    description: 'The size of a day when large.',
    type: 'string',
    defaultValue: '109.7px',
  },
  'calendar.large.fontSize': {
    description: 'The font size to use for days when large.',
    type: 'string',
    defaultValue: '30px',
  },
  'calendar.large.lineHeight': {
    description: 'The line height to use for days when large.',
    type: 'number',
    defaultValue: 1.11,
  },
  'calendar.large.slideDuration': {
    description: 'How long it animate the slide between months when large.',
    type: 'string',
    defaultValue: '0.8s',
  },
  'calendar.medium.daySize': {
    description: 'The size of a day when medium.',
    type: 'string',
    defaultValue: '54.84px',
  },
  'calendar.medium.fontSize': {
    description: 'The font size to use for days when medium.',
    type: 'string',
    defaultValue: '18px',
  },
  'calendar.medium.lineHeight': {
    description: 'The line height to use for days when medium.',
    type: 'number',
    defaultValue: 1.45,
  },
  'calendar.medium.slideDuration': {
    description: 'How long it animate the slide between months when medium.',
    type: 'string',
    defaultValue: '0.5s',
  },
  'calendar.small.daySize': {
    description: 'The size of a day when small.',
    type: 'string',
    defaultValue: '27.42px',
  },
  'calendar.small.fontSize': {
    description: 'The font size to use for days when small.',
    type: 'string',
    defaultValue: '14px',
  },
  'calendar.small.lineHeight': {
    description: 'The line height to use for days when small.',
    type: 'number',
    defaultValue: 1.375,
  },
  'calendar.small.slideDuration': {
    description: 'How long it animate the slide between months when small.',
    type: 'string',
    defaultValue: '0.2s',
  },
  'global.size.small': {
    description: 'The width of the calendar when small.',
    type: 'string',
    defaultValue: '192px',
  },
  'global.size.medium': {
    description: 'The width of the calendar when medium.',
    type: 'string',
    defaultValue: '384px',
  },
  'global.size.large': {
    description: 'The width of the calendar when large.',
    type: 'string',
    defaultValue: '768px',
  },
  ...themeDocUtils.iconColor,
  ...themeDocUtils.edgeStyle('The possible sizes for margin.'),
};
