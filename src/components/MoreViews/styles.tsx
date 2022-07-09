import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin-left: 40px;
  padding-left: 40px;
  border-left: 1px solid #c4c4c4;

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 10px;
    padding-left: 0;
    border-left: none;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.familys.first};
`;
