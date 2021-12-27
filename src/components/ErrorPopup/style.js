import styled from "styled-components";

export const ErrorsWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000063;
  z-index: 11;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 225px;
  border: 1px solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin: auto;
  color: white;
  h1{
    margin: 20px 0;
  }
  p{
    margin-top: auto;
  }
  button{
    margin: 20px 0;
    width: 100px;
    padding: 5px;
    outline: none;
    border-radius: 7px;
    background: #339cff;
    border: none;
    box-shadow: 0 0 4px 0;
    cursor: pointer;
    :hover{
      background: #61dafb;
    }
  }
`;