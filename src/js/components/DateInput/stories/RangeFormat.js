import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';

const dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
});

const Example = () => {
  const [value, setValue] = React.useState([
    '2020-07-31T15:24:26.256Z',
    '2020-08-07T15:24:26.256Z',
  ]);
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Box width="medium">
          <DateInput
            value={value}
            format="mm/dd/yyyy-mm/dd/yyyy"
            buttonProps={{
              label: `${dateFormat.format(
                new Date(value[0]),
              )} - ${dateFormat.format(new Date(value[1]))}`,
            }}
            onChange={onChange}
          />
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('DateInput', module).add('Range format', () => <Example />);
