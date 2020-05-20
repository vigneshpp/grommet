import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Location,
  System,
  ShieldSecurity,
  Tasks,
  User,
  Wifi,
} from 'grommet-icons';
import { Box, Card, Grid, Grommet, Text } from 'grommet';

const data = [
  {
    color: 'blue',
    icon: <Wifi size="large" />,
    title: 'Remote Access',
    subTitle: 'Lights out Management (LOM)',
    message: 'Connected',
  },
  {
    color: 'green',
    icon: <System size="large" />,
    title: 'System',
    subTitle: 'Sub-system and Devices',
    message: 'Composable System',
  },
  {
    color: 'red',
    icon: <User size="large" />,
    title: 'User Sessions',
    subTitle: 'User Access on Server',
    message: '4 active sessions',
  },
  {
    color: 'purple',
    icon: <Tasks size="large" />,
    title: 'Logs',
    subTitle: 'Events, Integration, and Status',
    message: '204,353',
  },
  {
    color: 'orange',
    icon: <Location size="large" />,
    title: 'Beacons',
    subTitle: 'Unique identification light',
    message: '24 beacons connected',
  },
  {
    color: 'teal',
    icon: <ShieldSecurity size="large" />,
    title: 'Security',
    subTitle: 'Trusted Platform Module',
    message: 'No Module Connected',
  },
];

const theme = {
  global: {
    font: {
      family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI"`,
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#F740FF',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59',
    },
  },
  card: {
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27',
    },
  },
};

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

export const Example = () => (
  <Grommet theme={theme} full>
    <Box pad="large">
      <Grid gap="large" rows="small" columns={['medium', 'medium', 'medium']}>
        {data.map(value => (
          <Card
            background={value.color}
            key={value.message}
            footer={<Text size="xsmall">{value.message}</Text>}
          >
            <Identifier
              pad={{ horizontal: 'medium', vertical: 'small' }}
              title={value.title}
              subTitle={value.subTitle}
              size="small"
              align="left"
            >
              {value.icon}
            </Identifier>
          </Card>
        ))}
      </Grid>
    </Box>
  </Grommet>
);

storiesOf('Card', module).add('Identifier', () => <Example />);
