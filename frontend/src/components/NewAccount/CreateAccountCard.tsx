import { Title, Text, Paper, TextInput, PasswordInput, Button, Divider, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { X } from 'tabler-icons-react';
import { API_URL } from '../../models/fetcher';
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
      zip: (value) => (isNaN(Number(value)) ? 'Number of zip must be numeric' : null),
    },
  });

  const registeredAccountError = (alreadyRegistered: boolean) => {
    if (alreadyRegistered) {
      return (
        // <ErrorNotification {... "Email already registered"} />
        <Notification icon={<X size={18} />} color="red" disallowClose>
          Error: email already registered.
        </Notification>
      )
    }
    return (<></>);
  }

  const handleSubmit = async (values: NewUser) => {
    setAlreadyRegistered(false);

    await fetch(`${API_URL}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        number: values.streetNo,
        ...values,
        addressName: values.name.concat(" ", values.surname),
      }),
    }).then(response => {
      if (!(response.ok)) {
        setAlreadyRegistered(true);
        console.log("not ok");
      }
    });

    if (!alreadyRegistered) {
      props.setPhase(1);
    }

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
