import { Button, Container, Group, Stepper } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import ConfirmationCard from "./ConfirmationCard";
import SummaryCard from "./SummaryCard";
import UserForm from "./UserForm";

export interface StepProps {
  prevStep: Function;
  nextStep: Function;
}

export interface UserInfo {
  email: string;
  name: string;
  surname: string;
  street: string;
  streetNo: string;
  city: string;
  zip: string;
  phone: string;
  termsOfService: boolean;
}

export const OrderPlacement = () => {
  const [active, setActive] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    name: "",
    surname: "",
    street: "",
    streetNo: "",
    city: "",
    zip: "",
    phone: "",
    termsOfService: false,
});


  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container>
      <Stepper color="dark" active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step allowStepSelect={active > 0} label="First step" description="Cart Summary" >
          <CartCard nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>
        <Stepper.Step allowStepSelect={active > 1} label="Second step" description="Fill Personal information">
          <UserForm nextStep={nextStep} prevStep={prevStep} setUserInfo={setUserInfo} />
        </Stepper.Step>
        <Stepper.Step allowStepSelect={active > 2} label="Final step" description="Order Summary">
          <SummaryCard nextStep={nextStep} prevStep={prevStep} userInfo={userInfo} />
        </Stepper.Step>
        <Stepper.Completed>
          <ConfirmationCard {...userInfo.email} />
        </Stepper.Completed>
      </Stepper>
    </Container>
  );
};
