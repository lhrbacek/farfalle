import { Avatar, createStyles, Group, Menu, UnstyledButton, Text } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "tabler-icons-react";

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

function UnknownMenu() {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { classes, cx } = useStyles();

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
          <Avatar alt="user" radius="xl">
            <User size={24} />
          </Avatar>
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
            Unknown user
            </Text>
          </Group>
        </UnstyledButton>
      }
    >
      <Menu.Item component={Link} to='/signin'>
        Sign In
      </Menu.Item>
      <Menu.Item component={Link} to='/newcommer'>
        Create Account
      </Menu.Item>

    </Menu>
  )
}

export default UnknownMenu