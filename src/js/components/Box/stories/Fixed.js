import React from 'react';

import { Grommet, Box, Text } from 'grommet';
import { grommet } from '../../../themes';

export const FixedSizesBox = () => (
  <Grommet theme={grommet}>
    <Box pad="small" gap="small">
      <Box
        width="small"
        height="small"
        round="small"
        align="center"
        justify="center"
        background="brand"
        overflow={{ horizontal: 'hidden', vertical: 'scroll' }}
      >
        {Array(20)
          .fill()
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text key={i}>{`Small (${i})`}</Text>
          ))}
      </Box>
      <Box
        width="medium"
        height="medium"
        round="small"
        align="center"
        justify="center"
        background="brand"
      >
        Medium
      </Box>
      <Box
        width="large"
        height="large"
        round="small"
        align="center"
        justify="center"
        background="brand"
      >
        Large
      </Box>
    </Box>
  </Grommet>
);

FixedSizesBox.storyName = 'Fixed sizes';

export default {
  title: `Layout/Box/Fixed sizes`,
};
