import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 126px;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.white.main.hex()};
  border-radius: 12px;
  margin-bottom: 15px;

  img {
    width: 43px;
    height: 43px;
    border-radius: 50px;
    margin-right: 10px;
  }
`;

export const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  color: ${({ theme }) => theme.palette.purple.main.hex()};
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #555555;
`;

export const CreatedAt = styled.h4`
  font-family: ${({ theme }) => theme.fonts.familys.second};
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #8f8f8f;
`;

export const HeaderComment = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
