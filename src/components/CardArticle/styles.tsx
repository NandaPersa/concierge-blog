import styled from "styled-components";

export const Container = styled.div`
  width: 235px;
  height: 250px;
  padding: 10px 15px;
  border-radius: 16px;
`;

export const ImageArticle = styled.img`
  width: 100%;
  height: 137px;
  border-radius: 16px;
  background-color: chocolate;
  object-fit: cover;
`;

export const ContentCategory = styled.div`
  margin-top: -15px;
  margin-left: 15px;
  position: absolute;
  z-index: 15;
`;

export const ContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;

  h1 {
    font-size: 16px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    color: ${({ theme }) => theme.palette.titles.secundTitle.hex()};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.familys.first};
    color: ${({ theme }) => theme.palette.texts.main.hex()};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
