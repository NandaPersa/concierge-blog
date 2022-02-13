import styled from "styled-components";

export const Container = styled.div<{
  backgroundColor: string;
}>`
  min-width: 80px;
  padding: 0 10px;
  height: 20px;
  border-radius: 50px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.familys.second};
  color: ${({ theme }) => theme.palette.white.main.hex()};
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
