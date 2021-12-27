import styled from "styled-components";


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;
  align-items: center;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 2px 9px 3px ${props => props.theme.mainBorderColor};
  color: ${props => props.theme.primaryBlue};
  flex-direction: row;
  font-weight: bolder;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ImgSvg = styled.img`
 padding: 0 3px;
`;
export const SpanTitle = styled.p`
`;

