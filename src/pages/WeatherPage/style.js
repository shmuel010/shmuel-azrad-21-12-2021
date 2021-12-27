import styled from "styled-components";

export const WeatherWrapper = styled.div`
  width: 60%;
  margin: 30px auto 0;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  
`;

export const SearchErrors = styled.div`
  position: absolute;
  top: -23px;
  left: 0;
  font-size: 14px;
  color: #960026;
  
`;


export const SearchInput = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  border-radius: 30px;
  background: linear-gradient(
          268deg,rgba(179,206,226,0.9279061966583508) 11%,rgba(172,189,243,1) 36%,rgba(136,159,227,0.9447129193474265) 67%,rgba(126,151,225,1) 95%);
  outline: none;
  border: 1px solid rgb(41 41 41 / 25%);
  padding: 5px 15px;
  font-size: 18px;
  
  ::placeholder {
    color: ${props => props.theme.primaryBlue};;
  }
  input{
    width: 100%;
    height: 40px;
    border-radius: 30px;
    background: transparent;
    outline: none;
    border: none;
    padding: 5px 15px;
    font-size: 18px;
    margin-left: -17px;
    margin-top: -9px;
    ::placeholder {
      color: ${props => props.theme.primaryBlue};;
    }
  }
`;

export const SearchIcon = styled.div`
  width: 25px;
  position: absolute;
  right: 10px;
  top: 8px;
`;

export const SuggestionsWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 42px;
  width: 100%;
  background: #ffffffa6;
  border-radius: 0 0 15px 15px;
  text-align: left;
  max-height: 155px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(169, 169, 169, 0.199);
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.bgTransparentColor};
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px ${props => props.theme.primaryBlue};
    border-radius: 50px;
  }
  
`;

export const Suggestion = styled.div`
  padding: 10px;
  cursor: pointer;

  :hover {
    background: #ffffff67;
  }
`;


