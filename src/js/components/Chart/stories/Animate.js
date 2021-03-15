import React from 'react';

import { Grommet, Box, Chart, Heading } from 'grommet';
import { grommet } from 'grommet/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

export const AnimatedChart = () => (
  <Grommet theme={grommet}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} animate />
        </Box>
      ))}
    </Box>
  </Grommet>
);

AnimatedChart.storyName = 'Animate';

AnimatedChart.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Chart/Animate',
};
