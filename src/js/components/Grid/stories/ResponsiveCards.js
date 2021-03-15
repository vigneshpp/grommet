import React, { useContext } from 'react';

import {
  grommet,
  Box,
  Card,
  Grid,
  Grommet,
  ResponsiveContext,
  Text,
} from 'grommet';

const cards = Array(20)
  .fill()
  // eslint-disable-next-line react/no-array-index-key
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export const Example = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Grommet theme={grommet}>
      <Box pad="large">
        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
          {cards.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card pad="large" key={index}>
              {card}
            </Card>
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

Example.storyName = 'Responsive cards';

export default {
  title: 'Layout/Grid/Responsive cards',
};
