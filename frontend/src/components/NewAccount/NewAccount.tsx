import { Container } from '@mantine/core';
import { useState } from 'react';
import AccountCreatedCard from './AccountCreatedCard';
import CreateAccountCard from './CreateAccountCard';

function NewAccount() {
  const [phase, setPhase] = useState(0);

  const NewAccountPhase = (phase: number) => {
    if (phase == 0) {
      return (<CreateAccountCard setPhase={setPhase}/>);
    }
    return (<AccountCreatedCard />);
  }

  return (
    <Container size={420} my={40}>
      {NewAccountPhase(phase)}
    </Container>
  );
}

export default NewAccount;
