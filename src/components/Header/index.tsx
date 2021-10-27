import React from "react";

import {
  Container,
  LogoContainer,
  MenuMobile,
  SearchContainer,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import iconSearch from "../../assets/icons/iconSearch.svg";
import iconHamburguer from "../../assets/icons/menuHamburguer.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer src={logoImg} />
      <SearchContainer>
        <input type="text" id="search" placeholder="Buscar" />
        <img src={iconSearch} alt="lupa" />
      </SearchContainer>
      <MenuMobile src={iconHamburguer} alt="menu" />
    </Container>
  );
};

export default Header;
