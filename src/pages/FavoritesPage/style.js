import styled from "styled-components"

export const FavoriteWrapper = styled.div`
  width: 60%;
  margin: 30px auto auto;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & span{
    margin: 10px 0;
    font-size: 30px;
    font-weight: bold;
  }
`
export const FavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  width: 100%;
  & p{
    margin: auto;
    text-align: center;
  }
  
`
