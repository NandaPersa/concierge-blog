import React from "react";
import {
  ButtonFacebook,
  ButtonGoogle,
  Container,
  Texthighlighted,
} from "./styles";

import iconConcierge from "../../assets/icons/icon.svg";
import iconFacebook from "../../assets/icons/icon-facebook.svg";
import iconGoogle from "../../assets/icons/icon-google.svg";

const LoginSocialModal: React.FC = () => {
  return (
    <Container>
      <img src={iconConcierge} alt="" />
      <h1>Olá faça login para comentar</h1>
      <Texthighlighted>Você pode...</Texthighlighted>
      <ButtonFacebook>
        <img src={iconFacebook} alt="" />
        Continuar com o facebook
      </ButtonFacebook>
      <p>ou</p>
      <ButtonGoogle>
        <img src={iconGoogle} alt="" />
        Continuar com o google
      </ButtonGoogle>
    </Container>
  );
};

export default LoginSocialModal;
