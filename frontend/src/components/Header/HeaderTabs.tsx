import { createStyles, Container, Group, Image, Text, Menu, Burger, UnstyledButton, Divider, Avatar, Button } from '@mantine/core';
import { useState } from 'react';
import { useBooleanToggle } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';

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

interface HeaderTabsProps {
  user: { name: string, image: string};
  tabs: string[];
}

export function HeaderTabs({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const location = useLocation();

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

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <Menu
            size={260}
            placement="end"
            transition="pop-top-right"
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Item >
              Tickets
            </Menu.Item>

            <Divider />

            <Menu.Label>Profile</Menu.Label>
            <Menu.Item >
              Account
            </Menu.Item>
            <Menu.Item >
              Delete account
            </Menu.Item>
            <Menu.Item >
              Sign out
            </Menu.Item>
          </Menu>

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
