import React from "react";
import { Container, Image, Autor, Category } from "./styles";

// import { Container } from './styles';

interface Props {
  img: string;
  alt: string;
}

const CorroselImages = ({ img, alt }: Props): JSX.Element => {
  return (
    <Container>
      <Image src={img} alt={alt} />
      <Autor>Ananda Sá</Autor>
      <Category>Category</Category>
    </Container>
  );
};

export default CorroselImages;
