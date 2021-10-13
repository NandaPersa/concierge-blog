import React from "react";

import { Container, LogoContainer, SearchContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import iconSearch from "../../assets/icons/iconSearch.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer src={logoImg} />
      <p> teste de commit </p>
      <SearchContainer>
        <input type="text" id="search" placeholder="Buscar" />
        <img src={iconSearch} alt="lupa" />
      </SearchContainer>
    </Container>
  );
};

export default Header;
