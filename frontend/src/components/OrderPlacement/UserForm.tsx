import { TextInput, Checkbox, Button, Group, Box, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface FormInputProps {
  name: string;
  surname: string;
  street: string;
  streetNo: number;
  city: string;
  zipCode: number;
  phonePrefix: string;
  phone: string;
  email: string
}


export function UserForm() {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      surname: '',
      street: '',
      streetNo: '',
      city: '',
      zip: '',
      phone: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Divider  my="xl" label="Personal Information" labelPosition="center" />
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

        <Divider  my="xl" label="Address" labelPosition="center" />

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

        <Divider  my="xl" label="Contact" labelPosition="center" />

        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          required
          label="Phone"
          placeholder="111222333"
          {...form.getInputProps('phone')}
        />

        <Checkbox
          mt="md"
          label="I agree with everything"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default UserForm;