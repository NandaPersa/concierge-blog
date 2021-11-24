import React from "react";
import Carrossel from "../../components/Carrossel";
import Header from "../../components/Header";
import { Container, ContainerSlider } from "./styles";

const Principal: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <ContainerSlider>
          <Carrossel />
        </ContainerSlider>
      </Container>
    </>
  );
};

export default Principal;
