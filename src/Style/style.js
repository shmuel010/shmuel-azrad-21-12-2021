import styled from "styled-components";
import bg from "../assets/bg-app.jpg"


export const AppContainer = styled.div`
  height: 100vh;
  color: ${props => props.theme.primaryBlue};
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover ;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  
  //@media only screen and (max-width: 415px) {
  //  background-size: contain ;
  //}
  //
`;


export const BtnWrapper = styled.div`
  position: fixed;
  top: 130px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  
`;

export const ChangeModeBtn = styled.button`
  text-align: center;
  width: 70px;
  height: 70px;
  background: #8CA0D0;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  padding: 13px;
  border: 1px solid ${props => props.theme.mainBorderColor};
  cursor: pointer;
  z-index: 10;
  opacity: 10;
  &svg{
    width: 100%;
    height: 100%;
  }
  &:hover{
    background: #61dafb;
  }
  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 18px;

  }
  
`

export const CenterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
