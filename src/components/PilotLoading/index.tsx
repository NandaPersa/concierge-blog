import React from "react";
import Lottie from "react-lottie";
import LoadingRocket from "../../assets/loading_rocket.json";

import { Container } from "./styles";

const PilotLoading: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingRocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie options={lottieOptions} height={400} width={400} />
      <h1>
        Bem-vindo ao <span>Concierge Blog.</span>
      </h1>
      <p>Estamos organizando tudo para você, aguarde um instante...</p>
    </Container>
  );
};

export default PilotLoading;
