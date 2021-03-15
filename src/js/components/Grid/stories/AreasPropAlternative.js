import React from 'react';

import { Grommet, Box, Grid } from 'grommet';
import { grommet } from 'grommet/themes';

export const GridAreasAlternative = () => (
  <Grommet full theme={grommet}>
    <Grid
      rows={['xxsmall', 'medium', 'xsmall']}
      columns={['1/4', '3/4']}
      areas={[
        ['header', 'header'],
        ['sidebar', 'main'],
        ['footer', 'footer'],
      ]}
      gap="small"
    >
      <Box background="brand" gridArea="header">
        Header
      </Box>

      <Box background="light-5" gridArea="sidebar">
        Sidebar
      </Box>

      <Box background="light-2" gridArea="main">
        Main
      </Box>

      <Box background="dark-2" gridArea="footer">
        Footer
      </Box>
    </Grid>
  </Grommet>
);

GridAreasAlternative.storyName = 'Areas prop alternatives';

export default {
  title: 'Layout/Grid/Areas prop alternatives',
};
