import React from 'react';

import { Box, Grommet, Layer } from 'grommet';
import { grommet } from 'grommet/themes';

const MarginLayer = ({ margin, ...rest }) => (
  <Grommet theme={grommet}>
    <Layer
      margin={
        margin || { left: '40px', top: '50px', right: '30px', bottom: '10px' }
      }
      {...rest}
    >
      <Box height="small" overflow="auto">
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
      </Box>
    </Layer>
  </Grommet>
);

export const MarginTopCenter = () => (
  <MarginLayer margin={{ top: 'large' }} position="top" />
);
MarginTopCenter.storyName = 'Margin top (center)';

export default {
  title: 'Layout/Layer/Margin top (center)',
};
