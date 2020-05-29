import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #232323;
`;

//Tamaño del logo de Weetch
export const Logo = styled.img`
  width: 150px;
  height: 80px;
  margin-left: 2em;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    margin-left: 5%;
  }
`;
