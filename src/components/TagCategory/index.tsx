import React from "react";
import { Container } from "./styles";

interface Props {
  name: string;
  color: string;
  // eslint-disable-next-line react/require-default-props
  customClass?: string;
}

const TagCategory = ({ name, color, customClass }: Props): JSX.Element => {
  return (
    <Container backgroundColor={color} className={customClass}>
      <p>{name}</p>
    </Container>
  );
};

export default TagCategory;
