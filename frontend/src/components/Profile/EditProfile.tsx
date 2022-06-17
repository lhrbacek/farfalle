import { TextInput, Button, Group, Box, Title, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { Check, X } from 'tabler-icons-react';
import { userIdState } from '../../state/UserIdState';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import { UserProfile } from '../../types/user'
import { API_URL } from '../../models/fetcher';

export function EditProfile() {
  const [saved, setSaved] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const userId = useRecoilValue(userIdState);
  // let user = {
  //   email: '',
  //   name: '',
  //   surname: '',
  //   address: {
  //     city: '',
  //     street: '',
  //     number: '',
  //     zip: ''
  //   }
  // };

  const { data, error } = useSWR(`user/${userId}`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  const user: UserProfile = data;

  const userData = {
    email: user.email,
    name: user.name,
    surname: user.surname,
    street: user.address.street,
    streetNo: user.address.number,
    city: user.address.city,
    zip: user.address.zip,
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

  const errorNotification = (error: boolean) => {
    if (error) {
      return (
        <Notification disallowClose icon={<X size={18} />} color="teal" title="Error">
          Error encountered, sorry!
        </Notification>
      );
    }
    return (<></>);
  }

  const handleSubmit = async (values: any) => {
    setSaved(false);
    setErrorOccured(false);

    // create address
    const address = await fetch(`${API_URL}address`, {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        name: values.name.concat(" ", values.surname),
        street: values.street,
        number: values.streetNo,
        zip: values.zip,
        city: values.city,
      }),
    }).then(response => response.json());

    if (address == undefined) {
      setErrorOccured(true);
      return;
    }

    // update profile
    await fetch(`${API_URL}user/${userId}`, {
      credentials: 'include',
      method: "PATCH",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        name: values.name,
        surname: values.surname,
        address: address.id,
      }),
    }).then(response => {
      if (!(response.ok)) {
        console.log("Error");
        setErrorOccured(true);
      } else {
        setSaved(true);
      }
    });
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Title>Edit account</Title>

      {saveNotification(saved)}
      {errorNotification(errorOccured)}

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