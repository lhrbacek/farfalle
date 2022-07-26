import { Button, Group, Title, Text, createStyles, Card } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Play } from '../../types/play';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[2],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[3],
    }
  },

  group: {
    display: 'flex',
    alignItems: 'center',

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },

  innerGroup: {
    alignItems: 'baseline',
    display: 'flex',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  buttonAbout: {
    backgroundColor: 'white'
  },
}));

export function PlayItem(props: Play) {
  const { classes } = useStyles();
  const idPlay = props.id; //TODO: id of the performance --> goes to play page

  return (
    <Card shadow="sm" p="lg" className={classes.card}>
      <Group className={classes.group}>
        <Group className={classes.innerGroup}>
          <Title order={2}>{props.name}</Title>
        </Group>
        <Group className={classes.innerGroup}>
          <Text>Directed by {props.director}</Text>
          <Button variant="default" color='white' component={Link} to={`/program/${idPlay}`}>
            About play
          </Button>
        </Group>
      </Group>
    </Card>
  );
}

export default PlayItem;
