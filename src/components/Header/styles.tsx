import styled from "styled-components";

export const Container = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.palette.pink.main.hex()};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const LogoContainer = styled.img`
  width: 200px;
`;

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main.hex()};
  border: solid 1px ${({ theme }) => theme.palette.purple.main.hex()};
  border-radius: 20px;
  width: 246px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  input {
    background-color: transparent;
    font-style: italic;
    font-size: 16px;
    height: 34px;
    width: 190px;
    border: none;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MenuMobile = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
