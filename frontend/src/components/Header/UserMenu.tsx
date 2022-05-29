import { Avatar, createStyles, Group, Menu, UnstyledButton, Text, Divider } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCheck } from "tabler-icons-react";
import { user } from '../../data/user';

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },
}));

function UserMenu() {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { classes, cx } = useStyles();

  const signOutUser = () => {
    // TODO: change global state - sign out
  }

  return (
    <Menu
      size={260}
      placement="end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      control={
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar alt={user.name} radius="xl">
              <UserCheck size={24} color='red' />
            </Avatar>
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {user.name}
            </Text>
          </Group>
        </UnstyledButton>
      }
    >

      <Menu.Item component={Link} to='/account'>
        Account
      </Menu.Item>

      <Divider />
      <Menu.Item component={Link} to='/account/tickets'>
        Return tickets
      </Menu.Item>

      <Menu.Item color="red" onClick={() => signOutUser()}>
        Sign out
      </Menu.Item>
    </Menu>
  )
}

export default UserMenu
