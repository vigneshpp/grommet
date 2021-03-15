import React from 'react';

import { Anchor, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const SizeAnchor = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(size => (
        <Box key={size} margin="small">
          <Anchor size={size} label={size} href="#" />
        </Box>
      ))}
    </Box>
  </Grommet>
);

export const Size = () => <SizeAnchor />;

export default {
  title: 'Controls/Anchor/Size',
};
