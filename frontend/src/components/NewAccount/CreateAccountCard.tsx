import { Title, Text, Paper, TextInput, PasswordInput, Button, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ErrorNotification from '../Notification/ErrorNotification';

interface NewUser {
  name: string,
  surname: string,
  email: string,
  password: string,
  street: string,
  streetNo: string,
  city: string,
  zip: string,
}

interface CreateAccountProps {
  setPhase: Function
}

function CreateAccount(props: CreateAccountProps) {
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      street: '',
      streetNo: '',
      city: '',
      zip: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      surname: (value) => (value.length < 2 ? 'Surname must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must be at least 8 characters long' : null),
      city: (value) => (value.length < 2 ? 'Surname must have at least 2 letters' : null),
      street: (value) => (value.length < 2 ? 'Surname must have at least 2 letters' : null),
      streetNo: (value) => (isNaN(Number(value)) ? 'Number of street must be numeric' : null),
      zip: (value) => (isNaN(Number(value)) ? 'Number of street must be numeric' : null),
    },
  });

  const registeredAccountError = (alreadyRegistered: boolean) => {
    if (alreadyRegistered) {
      return (
        <ErrorNotification {... "Email already registered"} />
      )
    }
    return (<></>);
  }

  const handleSubmit = (values: NewUser) => {
    var registered = false;
    setAlreadyRegistered(false);
    // TODO: Check whether email is not registered already
    if (registered) {
      setAlreadyRegistered(true);
      return;
    }

    // TODO: Store value in database
    props.setPhase(1);
  }

  return (
    <>
      <Title align="center">
        Start your journey here!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Divider my="xl" label="Personal Information" labelPosition="center" />
          <TextInput
            required
            label="Name"
            placeholder="Joe"
            {...form.getInputProps('name')}
          />

          <TextInput
            required
            label="Surname"
            placeholder="Doe"
            {...form.getInputProps('surname')}
          />

          <TextInput
            required
            label="Email"
            placeholder="joe@farfalle.com"
            {...form.getInputProps('email')}
          />
          <Divider my="xl" label="Address" labelPosition="center" />

          <TextInput
            required
            label="Street"
            placeholder="Big"
            {...form.getInputProps('street')}
          />

          <TextInput
            required
            label="Street No."
            placeholder="123"
            {...form.getInputProps('streetNo')}
          />

          <TextInput
            required
            label="City"
            placeholder="New York"
            {...form.getInputProps('city')}
          />

          <TextInput
            required
            label="Zip Code"
            placeholder="123546"
            {...form.getInputProps('zip')}
          />

          <Divider my="xl" label="Password" labelPosition="center" />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
          />

          <Button color='dark' fullWidth mt="xl" type="submit">
            Create account
          </Button>
        </form>

        {registeredAccountError(alreadyRegistered)}

        <Text color="dimmed" size="sm" align="center" mt="xl">
          Do you already have an account?
        </Text>
        <Button variant='outline' color='dark' fullWidth component={Link} to='/signin'>
          Sign in
        </Button>
      </Paper>

    </>
  );
}

export default CreateAccount;