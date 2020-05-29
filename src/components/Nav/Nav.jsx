import React from 'react';
import WeetchLogo from './WeetchLogo.svg';

// Estilos
import { NavContainer, Logo } from './navStyles';

function Nav({ children }) {
  return (
    <NavContainer>
     <Logo src={WeetchLogo} alt='' />
      {children}
    </NavContainer>
  );
}

export default React.memo(Nav);
