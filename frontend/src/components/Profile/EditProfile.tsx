import { TextInput, Button, Group, Box, Title, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'tabler-icons-react';

export function EditProfile() {
  const [saved, setSaved] = useState(false);

  const userData = {  //TODO: Fetch data from backend and fill out this values, if logged in
    email: 'jdoe@gmail.com',
    name: 'Joe',
    surname: 'Doe',
    street: 'Blue',
    streetNo: '98',
    city: 'London',
    zip: '123',
  };
  const form = useForm({
    initialValues: userData,
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      surname: (value) => (value.length < 2 ? 'Surname must have at least 2 letters' : null),
      street: (value) => (value.length < 2 ? 'Surname must have at least 2 letters' : null),
      streetNo: (value) => (isNaN(Number(value)) ? 'Number of street must be numeric' : null),
      zip: (value) => (isNaN(Number(value)) ? 'Number of street must be numeric' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const saveNotification = (saved: boolean) => {
    if (saved) {
      return (
        <Notification disallowClose icon={<Check size={18} />} color="teal" title="Success">
          Account edited!
        </Notification>
      );
    }
    return (<></>);
  }

  const handleSubmit = (values: any) => {
    setSaved(false);
    console.log(values);
    // TODO: Save into DB
    setSaved(true);
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Title>Edit account</Title>

      {saveNotification(saved)}

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
          label="Street"
          placeholder="Big"
          {...form.getInputProps('street')}
        />

        <TextInput
          label="Street No."
          placeholder="123"
          {...form.getInputProps('streetNo')}
        />

        <TextInput
          label="City"
          placeholder="New York"
          {...form.getInputProps('city')}
        />

        <TextInput
          label="Zip Code"
          placeholder="123546"
          {...form.getInputProps('zip')}
        />

        <TextInput
          disabled
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Group position="center" mt="xl">
          <Button variant='outline' color='dark' component={Link} to='/account'>My account</Button>
          <Button color='dark' type="submit">Save</Button>
        </Group>
      </form>

    </Box>
  );
}

export default EditProfile;