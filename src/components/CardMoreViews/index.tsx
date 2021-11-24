import React from "react";
import {
  Container,
  Image,
  Position,
  Content,
  Category,
  Title,
  Resume,
} from "./styles";

const CardMoreViews: React.FC = () => {
  return (
    <Container>
      <Image>
        <Position>1ª</Position>
        <img src=" " alt="" />
      </Image>
      <Content>
        <Category>Categoria</Category>
        <Title>Meu titulo</Title>
        <Resume>Um lindo resumo simplificado para o post.</Resume>
      </Content>
    </Container>
  );
};

export default CardMoreViews;
