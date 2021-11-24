import React from "react";
import CardMoreViews from "../CardMoreViews";

import { Container, Title } from "./styles";

const MoreViews: React.FC = () => {
  return (
    <Container>
      <Title>Mais vistos</Title>
      <CardMoreViews />
      <CardMoreViews />
      <CardMoreViews />
      <CardMoreViews />
      <CardMoreViews />
    </Container>
  );
};

export default MoreViews;
