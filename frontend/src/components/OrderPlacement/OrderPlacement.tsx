import { Container, Stepper } from "@mantine/core";
import { useEffect, useState } from "react";
import LoadError from "../Error/LoadError";
import CartCard from "./CartCard";
import ConfirmationCard from "./ConfirmationCard";
import SummaryCard from "./SummaryCard";
import UserForm from "./UserForm";

export interface UserInfo {
  email: string;
  name: string;
  surname: string;
  street: string;
  streetNo: string;
  city: string;
  zip: string;
  termsOfService: boolean;
}

export const OrderPlacement = () => {
  const [fatalError, setFatalError] = useState(false);
  const [emptyCart, emptyCartEmpty] = useState(false);
  const [active, setActive] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    name: "",
    surname: "",
    street: "",
    streetNo: "",
    city: "",
    zip: "",
    termsOfService: false,
  });

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    document.title = "Farfalle | Cart"
  }, [])

  const OrderPlacementCard = () => {
    if (!fatalError) {
      return (
        <Stepper color="dark" active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step allowStepSelect={active > 0} label="First step" description="Cart Summary" >
            <CartCard nextPhase={nextStep} prevPhase={prevStep} emptyCart={emptyCart} setEmptyCart={emptyCartEmpty} setFatalError={setFatalError} />
          </Stepper.Step>
          <Stepper.Step allowStepSelect={active > 1} label="Second step" description="Fill Personal information">
            <UserForm nextStep={nextStep} prevStep={prevStep} setUserInfo={setUserInfo} />
          </Stepper.Step>
          <Stepper.Step allowStepSelect={active > 2} label="Final step" description="Order Summary">
            <SummaryCard nextPhase={nextStep} prevPhase={prevStep} userInfo={userInfo} emptyCart={emptyCart} setEmptyCart={emptyCartEmpty} setFatalError={setFatalError} />
          </Stepper.Step>
          <Stepper.Completed>
            <ConfirmationCard />
          </Stepper.Completed>
        </Stepper>
      )
    }
    return (
      <LoadError />
    );
  }

  return (
    <Container>
      <OrderPlacementCard />
    </Container>
  );
};
