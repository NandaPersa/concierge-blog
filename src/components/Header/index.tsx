import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    navigate(`/search/${e.target.value}`, { replace: true });
  };

  return (
    <Container>
      <LogoContainer src={logoImg} />
      <SearchContainer onSubmit={onSubmit}>
        <input type="text" id="search" placeholder="Buscar" />
        <button type="submit">
          <img src={iconSearch} alt="lupa" />
        </button>
      </SearchContainer>
      <MenuMobile src={iconHamburguer} alt="menu" />
    </Container>
  );
};

export default Header;
