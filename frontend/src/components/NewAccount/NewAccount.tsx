import { Container } from '@mantine/core';
import { useState } from 'react';
import AccountCreatedCard from './AccountCreatedCard';
import CreateAccountCard from './CreateAccountCard';

function NewAccount() {
  const [phase, setPhase] = useState(0);

  const NewAccountPhase = () => {
    if (phase == 0) {
      return (<CreateAccountCard setPhase={setPhase} />);
    }
    return (<AccountCreatedCard />);
  }

  return (
    <Container size={420} my={40}>
      <NewAccountPhase />
    </Container>
  );
}

export default NewAccount;
