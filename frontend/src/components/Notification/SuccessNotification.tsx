import { Notification } from '@mantine/core';
import { Check } from 'tabler-icons-react';

export function SuccessNotification(text: string) {
  return (
    <Notification disallowClose icon={<Check size={18} />} color="teal" title="Success">
      Tickets returned!
    </Notification>
  );
}

export default SuccessNotification;
