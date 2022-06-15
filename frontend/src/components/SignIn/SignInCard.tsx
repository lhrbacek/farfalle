import { Container, Title, Text, Paper, TextInput, PasswordInput, Button, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { X } from 'tabler-icons-react';
import { API_URL } from '../../models/fetcher';
import { userIdState } from '../../state/UserIdState';

interface SignUser {
  email: string,
  password: string
}

interface SignInProps {
  setPhase: Function
}

function SignInCard(props: SignInProps) {
  const [userId, setUserId] = useRecoilState(userIdState);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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

  const SignUserIn = async (values: SignUser) => {
    let hash = '';
    let isAdmin: boolean;
    setSignError(false);

    // LOGIN, POST on url below with object {email: "", password: ""}
    // no hash, hash password must be put on login screen, TODO
    await fetch(`${API_URL}auth/login`, {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        ...values,
      }),
    }).then(response => {
      if (!(response.ok)) {
        setSignError(true);
        return;
      } else {
        response.json().then(data => {
          if (!data.userId) {
            setSignError(true);
            return;
          }
          setUserId(+(data.userId));
        })
      }
    });

    navigate(from, { replace: true }); // after login navigate where the user wanted to go
    // props.setPhase(1);
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
