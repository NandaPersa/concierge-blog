import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 135px;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 3px solid blue;
  background-color: tomato;
`;
export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  width: 27px;
  height: 27px;
  border-radius: 100px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.white.main.hex()};
`;

export const Content = styled.div`
  width: 250px;
  margin-left: 20px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 23px;
  background-color: tomato;
  border-radius: 100px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.familys.secund};
  color: ${({ theme }) => theme.palette.white.main.hex()};
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-size: 18px;
  font-weight: 600;
`;

export const Resume = styled.p`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-size: 13px;
  font-weight: 200;
`;
