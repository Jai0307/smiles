import styled from "styled-components";

export const StyledBackdrop = styled.div`
  background-color: #000;
  opacity: 0.75;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 500%;
  z-index: 999;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: #ffffff;
  border: 1px solid #bf40bf;
  border-radius: 10px;
  width: min(500px, 75%);
  top: 50%;
  left: 50%;
  z-index: 1000;
  max-height: 75vh;
  transform: translate(-50%, -50%);
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px 10px 0 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const Header = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 600;
  color: black;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2;
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin: 10px;
  padding: 10px;
`;

export const RegisterField = styled.div`
  display: flex;
  margin: 10px 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.div`
  background-color: #eee;
  color: #bf40bf;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: max(18px, 2vh);
  cursor: pointer;
  text-transform: uppercase;
  width: min(250px, 75%);
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  &:hover {
    font-weight: 700;
  }
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 20px;
  text-align: center;
`;
