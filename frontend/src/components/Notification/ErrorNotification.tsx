import { Notification } from '@mantine/core';
import { X } from 'tabler-icons-react';

function ErrorNotification(text: string) {
  return (
    <Notification icon={<X size={18} />} color="red" disallowClose>
      {text}
    </Notification>
  );
}

export default ErrorNotification;
