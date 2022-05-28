import { Button, Group, Title, Text, createStyles, Card } from '@mantine/core';
import { PerformanceProps } from '../types/performance';
import {
  Ticket
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { PlayProps } from '../types/play';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[2],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[1],
    }
  },

  group: {
    alignItems: 'center',
  },

  innerGroup: {
    alignItems: 'baseline',
  },

  buttonAbout: {
    backgroundColor: 'white'
  },
}));

export function PlayItem(props: PlayProps) {
  const { classes } = useStyles();
  const idPlay = 1; //TODO: id of the performance --> goes to play page

  return (
    <Card shadow="sm" p="lg" className={classes.card}>
      <Group position="apart" className={classes.group}>
        <Group className={classes.innerGroup}>
          <Title order={2}>{props.title}</Title>
          <Text>Premiere on {props.premiere}, directed by {props.director}</Text>
        </Group>
        <Group spacing={0}>
          <Button variant="default" color='white' component={Link} to={`/program/${idPlay}`}>
            About play
          </Button>
        </Group>
      </Group>
    </Card>
  );
}

export default PlayItem;
