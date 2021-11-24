import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin-left: 40px;
  padding-left: 40px;
  border-left: 1px solid #c4c4c4;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.familys.first};
`;
