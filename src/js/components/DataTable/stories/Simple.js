import React from 'react';

import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

export const Simple = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} />
    </Box>
  </Grommet>
);

export default {
  title: 'Visualizations/DataTable/Simple',
};
