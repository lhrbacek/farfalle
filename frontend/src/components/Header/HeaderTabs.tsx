import { createStyles, Container, Group, Image, Text, Button } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import UserMenu from './UserMenu';
import UnknownMenu from './UnknownMenu';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
    marginBottom: 20,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  menuButton: {
    color: theme.colors.gray[8],
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
    },
  },

  menuButtonClicked: {
    color: theme.black,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    },
  }

}));


export function HeaderTabs(props: {auth: boolean}) {
  const { classes } = useStyles();
  const location = useLocation();

  const userCard = (logged: boolean) => {
    if (logged == true) {
      return (
        <UserMenu />
      );
    }

    return (<UnknownMenu />);
  }

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Group>
            <Image
              width={50}
              radius="md"
              src="src\data\farfalle.png"
              alt="Farfalle Logo"
            />
            <Text component={Link} to="/home" size="xl" weight={700}>
              Farfalle
            </Text>
          </Group>

          {userCard(props.auth)}

        </Group>
      </Container>
      <Container>
        <Button
          className={location.pathname == "/home" ? classes.menuButtonClicked : classes.menuButton}
          component={Link}
          to="/home"
          variant="subtle"
        >
          Home
        </Button>
        <Button
          className={location.pathname == "/about" ? classes.menuButtonClicked : classes.menuButton}
          component={Link}
          to="/about"
          variant="subtle"
        >
          About
        </Button>
        <Button
          className={location.pathname.startsWith("/program") ? classes.menuButtonClicked : classes.menuButton}
          component={Link}
          to="/program"
          variant="subtle"
        >
          Program
        </Button>
        <Button
          className={location.pathname.startsWith("/cart") ? classes.menuButtonClicked : classes.menuButton}
          component={Link}
          to="/cart"
          variant="subtle"
        >
          Cart
        </Button>
      </Container>
    </div>
  );
}
