import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type ModalProps = {
  title: string;
  body: ReactNode;
  answerType: "single" | "multi";
};

const Modal = ({ title, body, answerType }: ModalProps) => {
  return (
    <BackDrop>
      <Container>
        <h2>{title}</h2>
        <>{body}</>
      </Container>
    </BackDrop>
  );
};

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  background-color: white;
  width: 30vw;
  height: 30vh;
`;

export default Modal;
