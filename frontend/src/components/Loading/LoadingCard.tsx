import { Notification, Container } from '@mantine/core';

function LoadingCard() {

  return (
    <Container>
      <Notification
        color='red'
        loading
        title="Loading data"
        disallowClose
      >
        Please wait until data is loaded, thank you for your time!
      </Notification>
    </Container>
  );
}

export default LoadingCard;
