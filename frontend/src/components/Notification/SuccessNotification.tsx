import { Notification } from '@mantine/core';
import { Check } from 'tabler-icons-react';

export function SuccessNotification(text: string) {
  return (
    <Notification icon={<Check size={18} />} color="green" disallowClose>
      {text}
    </Notification>
  );
}

export default SuccessNotification;
