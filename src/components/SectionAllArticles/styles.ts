import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.main.hex()};
  margin: 15px 0;

  .linkPost {
    text-decoration: none;
  }
`;

export const ContentCategory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-left: 5px;
  }

  @media (max-width: 580px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    color: ${({ theme }) => theme.palette.titles.main.hex()};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
