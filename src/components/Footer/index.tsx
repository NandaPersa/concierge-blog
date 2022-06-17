import React from "react";
import ImgInstagram from "../../assets/icons/instagram.svg";
import ImgFacebook from "../../assets/icons/facebook.svg";
import Imgyoutube from "../../assets/icons/youtube.svg";
import ImgLogo from "../../assets/logo.svg";
import { ContainerFooter } from "./styles";

export function Footer(): JSX.Element {
  return (
    <ContainerFooter>
      <>
        <div
          className="baseboard
"
        >
          <div className="container">
            <img
              className="logoFooter"
              src={ImgLogo}
              alt="Imagem logo Concierge"
            />
          </div>
          <div className="content">
            <p className="writeFooter">
              2022 - My Blog - Todos os direitos reservados.
            </p>
            <div className="logos">
              <a
                href="https://www.instagram.com/ananda_p_sa/?hl=pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ImgInstagram} alt="ícone do Instagram" />
              </a>
              <a
                href="https://www.facebook.com/raisa.alves.545/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ImgFacebook} alt="ícone do Facebook" />
              </a>
              <a href="https://youtube.com/">
                <img src={Imgyoutube} alt="ícone do Youtube" />
              </a>
            </div>
          </div>
        </div>
      </>
    </ContainerFooter>
  );
}
