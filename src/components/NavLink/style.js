import styled from "styled-components";

export const NavLinkWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background: #175be3;
    color: #61dafb;
  }
  @media only screen and (max-width: 400px){
    margin-left: 5px;

  }
`

export const NavLinkWrapperChooser = styled(NavLinkWrapper)`
  background-color: #339cff7a;
`

