import React from 'react';

import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { DATA } from './data';

const columns = [
  { property: 'name', header: 'Name' },
  { property: 'location', header: 'Location' },
];

export const NoPrimaryKeyDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} primaryKey={false} />
    </Box>
  </Grommet>
);

NoPrimaryKeyDataTable.storyName = 'No primary';

export default {
  title: 'Visualizations/DataTable/No primary',
};
