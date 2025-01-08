import { Background, Content, Spinner, Message } from "./LoadingModal.style";

function LoadingModal({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <Background>
      <Content>
        <Spinner />
        <Message>Loading...</Message>
      </Content>
    </Background>
  );
}

export default LoadingModal;
