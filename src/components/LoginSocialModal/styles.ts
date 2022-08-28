import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 0;

  h1 {
    font-family: ${({ theme }) => theme.fonts.familys.first};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    color: #555555;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.familys.first};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
  }
`;

export const Texthighlighted = styled.h2`
  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #555555;
  margin-bottom: 33px;
`;

export const ButtonFacebook = styled.button`
  background: #4267b2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  width: 297px;
  padding: 13px 16px 13px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  cursor: pointer;
`;

export const ButtonGoogle = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  width: 297px;
  padding: 13px 25px 13px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.fonts.familys.first};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
`;
