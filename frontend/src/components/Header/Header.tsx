import { createStyles, Container, Group, Image, Text, Button } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import UserMenu from './UserMenu';
import farfalle from "../../assets/farfalle.png"

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.gray[3],
    marginBottom: 20,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  menuButton: {
    color: theme.colors.gray[8],
    '&:hover': {
      backgroundColor: theme.colors.gray[2],
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  menuButtonClicked: {
    color: theme.black,
    backgroundColor: theme.white,
    '&:hover': {
      backgroundColor: theme.colors.gray[1],
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  }

}));


export function Header() {
  const { classes } = useStyles();
  const location = useLocation();

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Group>
            <Image
              width={50}
              radius="md"
              src={farfalle}
              alt="Farfalle Logo"
            />
            <Text component={Link} to="/" size="xl" weight={700}>
              Farfalle
            </Text>
          </Group>

          <UserMenu />

        </Group>
      </Container>
      <Container>
        <Button
          className={location.pathname == "/" ? classes.menuButtonClicked : classes.menuButton}
          component={Link}
          to="/"
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
