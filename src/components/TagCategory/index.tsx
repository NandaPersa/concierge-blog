import React from "react";
import { Container } from "./styles";

interface Props {
  name: string;
  color: string;
}

const TagCategory = ({ name, color }: Props): JSX.Element => {
  return (
    <Container backgroundColor={color}>
      <p>{name}</p>
    </Container>
  );
};

export default TagCategory;
