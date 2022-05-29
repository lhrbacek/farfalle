import { Container } from '@mantine/core';
import { useState } from 'react';
import SignedInCard from './SignedInCard';
import SignInCard from './SignInCard';

function SignIn() {
  const [phase, setPhase] = useState(0);

  const SignInPhase = (phase: number) => {
    if (phase == 0) {
      return (<SignInCard setPhase={setPhase}/>);
    }
    return (<SignedInCard />);
  }

  return (
    <Container size={420} my={40}>
      {SignInPhase(phase)}
    </Container>
  );
}

export default SignIn;
