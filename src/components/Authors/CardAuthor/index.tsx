import React from "react";

import { Container, Content, Name, Ocuppation, Image } from "./styles";

interface Props {
  name: string;
  occupation: string;
  image: string;
}

const CardAuthor = ({ name, occupation, image }: Props): JSX.Element => {
  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Content>
        <Name>{name}</Name>
        <Ocuppation>{occupation}</Ocuppation>
      </Content>
    </Container>
  );
};

export default CardAuthor;
