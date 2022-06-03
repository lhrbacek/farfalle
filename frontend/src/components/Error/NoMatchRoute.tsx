import React from 'react';
import { createStyles, Title, Button, Container, Group } from '@mantine/core';
import { Link, Navigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 150,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
  },
}));

export function NoMatchRoute() {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You better watch our plays.</Title>
    </Container>
  );
}

export default NoMatchRoute;
