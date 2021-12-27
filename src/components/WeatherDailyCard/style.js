import styled from "styled-components";

export const FavoriteWrapper = styled.div`
  position: relative;
  justify-content: space-between;
  min-width: 120px;
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.mainBorderColor};
  -webkit-box-shadow: -1px -1px 13px 5px rgba(184,180,247,1);
  -moz-box-shadow: -1px -1px 13px 5px rgba(184,180,247,1);
  box-shadow: -1px -1px 13px 5px rgba(184,180,247,1);background: #02d9fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 140px;
  

}
`;

export const HeartIconWrapper = styled.div`
  z-index: 1;
  position: relative;
  left: 0;
  right: 0;
  height: 22px;
  cursor: pointer;
  padding-bottom: 10px;
   svg{
    width: 100%;
    height: 100%;
    path {
      fill: #35a2c3;
    }
    
  }
`;

export const DailyCardTitle = styled.p`
  font-size: 20px;
  max-width: 130px;
  margin-top: 6px;
  font-weight: 600;
  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
`
export const Temperature = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
  @media only screen and (max-width: 900px) {
    font-size: 11px;
  }
`
export const StatusWeather = styled.p`
  font-size: 14px;
  margin: 0`