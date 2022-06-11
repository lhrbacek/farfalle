import { Avatar, createStyles, Group, Menu, UnstyledButton, Text, Divider } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu2, News, Pencil, ShoppingCart, User, UserCheck, X } from "tabler-icons-react";
import { user } from '../../data/user';

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.black,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,

    '&:hover': {
      [theme.fn.largerThan('sm')]: {
        backgroundColor: theme.colors.gray[0],
      },
    },
  },

  userActive: {
    [theme.fn.largerThan('sm')]: {
      backgroundColor: theme.colors.gray[0],
    },
  },

  userMenuButton: {
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  mobileMenu: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopMenu: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  }

}));

interface UserMenuProps {
  auth: boolean,
}

function UserMenu({ auth }: UserMenuProps) {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { classes, cx } = useStyles();

  const signOutUser = () => {
    // TODO: change global state - sign out
  }

  const getMenu = (auth: boolean) => {
    if (auth) {
      return (
        <>
          <Menu.Item component={Link} to='/account'>
            Account
          </Menu.Item>

          <Menu.Item component={Link} to='/account/tickets'>
            Return tickets
          </Menu.Item>

          <Menu.Item color="red" onClick={() => signOutUser()}>
            Sign out
          </Menu.Item>
        </>
      );
    }

    return (
      <>
        <Menu.Item component={Link} to='/signin'>
          Sign In
        </Menu.Item>
        <Menu.Item component={Link} to='/newcommer'>
          Create Account
        </Menu.Item>
      </>);
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
            <Avatar alt="user" radius="xl" className={classes.desktopMenu}>
              {
                auth ?
                  <UserCheck size={24} color='red' /> :
                  <User size={24} />
              }
            </Avatar>
            <Avatar alt="menu" className={classes.mobileMenu}>
              {
                userMenuOpened ?
                  <X size={24} /> :
                  <Menu2 size={24} />
              }
            </Avatar>
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3} className={classes.desktopMenu}>
              {auth ? user.name : "Unlogged user"}
            </Text>
          </Group>
        </UnstyledButton>
      }
    >

      {/* only for small screens */}
      <div className={classes.mobileMenu}>
        <Menu.Label>Navigation</Menu.Label>

        <Menu.Item icon={<Home size={20} />} component={Link} to='/'>
          Home
        </Menu.Item>
        <Menu.Item icon={<Pencil size={20} />} component={Link} to='/about'>
          About
        </Menu.Item>
        <Menu.Item icon={<News size={20} />} component={Link} to='/program'>
          Program
        </Menu.Item>
        <Menu.Item icon={<ShoppingCart size={20} />} component={Link} to='/cart'>
          Cart
        </Menu.Item>
        <Divider />
        <Menu.Label>User</Menu.Label>
      </div>


      {getMenu(auth)}

    </Menu>
  )
}

export default UserMenu
