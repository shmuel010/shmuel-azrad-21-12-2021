import styled from "styled-components";

export const CurrentWeatherCardWrapper = styled.div`
  max-width: 1200px;
  max-height: 270px;
  position: relative;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.mainBorderColor};
  background: ${props => props.theme.bgTransparentColor};
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 460px) {
    width: 130%;
  }
`;

export const HeartWrapperIconFavorite = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: 0.5s;
  z-index: 2;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: #0d799b;
    }
`;
export const HeartWrapperIcon = styled(HeartWrapperIconFavorite)`
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: #e7eae9;
    }
`

export const CurrentWeatherRow = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  position: relative;
  @media only screen and (max-width: 580px) {
    right: 31px;
  }
`;
export const IconWrapper = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  //display: flex;
  flex-direction: row;
  margin-top:30px ;
  display: inline-block;
  @media only screen and (max-width: 900px) {
    margin-right:20px ;
  }
  @media only screen and (max-width: 580px) {
    margin-top:60px ;
    margin-right:0 ;
    //margin-right:311px ;
   
  }
  img{
    width: 90%;
    max-width: 400px;
    min-width: 150px;

    @media only screen and (max-width: 900px) {
      width: 70%;
    }
    @media only screen and (max-width: 359px) {
      min-width: 130px;
    }
  }
`;

export const CurrentWeatherInfo = styled.div`
  padding-left: 100px;
  flex: 1;
  justify-content: center;
  text-align: left;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 460px) {
    font-size: 16px;
  }
`;

export const CityName = styled.p`
  box-sizing: border-box;
  //padding-left: 10px;
  font-size: 35px;
  margin:  0;
  font-weight: 600;
  //@media only screen and (max-width: 670px) {
  //  font-size: 25px;
  //}
  @media only screen and (max-width: 460px) {
    font-size: 30px;
  }
`;
export const DayName = styled.p`
  padding-top: 4px;
  box-sizing: border-box;
  font-size: 20px;
  margin:  0;
  
  @media only screen and (max-width: 460px) {
    font-size: 15px;
  }
`;

export const DailyForecasts = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: -10vw;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80vw;
  bottom: -130px;
  @media only screen and (max-width: 900px) {
    top: 180px;
    justify-content: center;
  }
  @media only screen and (max-width: 460px) {
    left: 0;
  }
`;


