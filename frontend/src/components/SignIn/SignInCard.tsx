import { Container, Title, Text, Paper, TextInput, PasswordInput, Button, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'tabler-icons-react';

interface SignUser {
  email: string,
  password: string
}

interface SignInProps {
  setPhase: Function
}

function SignInCard(props: SignInProps) {
  const [signError, setSignError] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
  });

  const signErrorNotification = (signError: boolean) => {
    if (signError) {
      return (
        <Notification icon={<X size={18} />} color="red" disallowClose>
          Wrong email or password!
        </Notification>
      )
    }
    return (<></>);
  }

  const SignUserIn = (values: SignUser) => {
    const user = undefined;
    const hash = '';
    const hashInput = '';
    setSignError(false);

    // TODO: find user according to email in database
    if (user == undefined) {
      setSignError(true);
      return;
    }
    // TODO: get password from and check hash
    if (hashInput != hash) {
      setSignError(true);
      return;
    }
    // TODO: update global state
    props.setPhase(1);
  }

  return (
    <Container size={420} my={40}>
      <Title align="center">
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">

        <form onSubmit={form.onSubmit((values) => SignUserIn(values))}>
          <TextInput
            required
            label="Email"
            placeholder="you@mantine.dev"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
          />

          <Button type='submit' color='dark' fullWidth mt="xl">
            Sign in
          </Button>
        </form>

        {signErrorNotification(signError)}

        <Text color="dimmed" size="sm" align="center" mt="xl">
          Do not have an account yet?
        </Text>
        <Button variant='outline' color='red' fullWidth component={Link} to='/newcommer'>
          Create account
        </Button>
      </Paper>

    </Container>
  );
}

export default SignInCard;
