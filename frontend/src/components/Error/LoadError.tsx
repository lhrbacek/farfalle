import React from 'react';
import { createStyles, Title, Text, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({

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

export function LoadError() {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.label}>500</div>
      <Title className={classes.title}>Internal server error</Title>
      <Text className={classes.text}>try later.</Text>
    </Container>
  );
}

export default LoadError;
