import { Button, Container, Group, Stepper } from "@mantine/core";
import { useState } from "react";
import { TicketProps } from "../types/ticket";
import CartCard from "./CartCard";
import UserForm from "./UserForm";

export interface CartCardProps {
  tickets: TicketProps[]
}

export const OrderPlacement = ({tickets}: CartCardProps) => {
  // const [step, setStep] = useState<number>(0);

  // switch (step) {
  //   case 0:
  //       return (
  //         <CartCard tickets={tickets}/>
  //       );
  //   case 1:
  //       return (
  //         <UserForm />
  //       );
  // }
  // return (<></>);

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container className='wrapper'>
      <Stepper color="dark" active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Cart Summary" >
          <CartCard tickets={tickets} />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Fill Persoal information">
          <UserForm />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Final Order">
          Step 3: Check Whole Order
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Container>
  );
};
