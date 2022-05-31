import { TextInput, Checkbox, Button, Group, Box, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserInfo } from './OrderPlacement';

interface FormProps {
  prevStep: Function;
  nextStep: Function;
  setUserInfo: Function;
}

export function UserForm(props: FormProps) {
  const userData = {  //TODO: Fetch data from backend and fill out this values, if logged in
    email: 'jdoe@gmail.com',
    name: 'Joe',
    surname: 'Doe',
    street: 'Blue',
    streetNo: '98',
    city: 'London',
    zip: '123',
    phone: '123456789',
    termsOfService: false,
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
      termsOfService: (value) => (!value ? 'Confirm the terms of service' : null),
    },
  });

  const handleSubmit = (values: UserInfo) => {
    console.log(values);
    props.setUserInfo(values);
    props.nextStep()
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
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

        <Divider my="xl" label="Contact" labelPosition="center" />

        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          label="Phone"
          placeholder="111222333"
          {...form.getInputProps('phone')}
        />

        <Checkbox
          mt="md"
          label="I agree with terms of service"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="center" mt="xl">
          <Button variant="default" onClick={() => props.prevStep()}>Back</Button>
          <Button type="submit" color='dark'>Next step</Button>
        </Group>
      </form>
    </Box>
  );
}

export default UserForm;