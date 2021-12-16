import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.purple.main.hex()};
  width: 100%;
  height: 387px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
