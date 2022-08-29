import React, { FormEvent, useState } from "react";
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
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/search/${term}`, { replace: true });
  };

  return (
    <Container>
      <LogoContainer src={logoImg} />
      <SearchContainer onSubmit={onSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Buscar"
          onChange={e => setTerm(e.target.value)}
          value={term}
        />
        <button type="submit">
          <img src={iconSearch} alt="lupa" />
        </button>
      </SearchContainer>
      <MenuMobile src={iconHamburguer} alt="menu" />
    </Container>
  );
};

export default Header;
