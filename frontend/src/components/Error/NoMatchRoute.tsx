import React from 'react';
import { createStyles, Title, Text, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 120,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
  },

  text: {
    textAlign: 'center',
  }
}));

export function NoMatchRoute() {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You better watch our plays</Title>
      <Text className={classes.text}>than sneaking around here.</Text>
    </Container>
  );
}

export default NoMatchRoute;
