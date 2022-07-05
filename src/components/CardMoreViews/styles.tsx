import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img<{
  borderColor: string;
}>`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 3px solid ${({ borderColor }) => borderColor};
  background-color: tomato;
  object-fit: cover;
`;
export const Position = styled.div`
  position: absolute;
  z-index: 10;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.pink.main.hex()};
  width: 27px;
  height: 27px;
  border-radius: 100px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.white.main.hex()};
`;

export const ContentCategory = styled.div`
  width: 40%;
`;

export const Content = styled.div`
  width: 250px;
  margin-left: 20px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const Resume = styled.p`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-size: 13px;
  font-weight: 200;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.texts.main.hex()};
`;
