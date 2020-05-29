import React from 'react';

//Hecho con ayuda de styled-components
import { SearchWrapper, Search } from './searchBarStyles';

//Barra de busqueda
function SearchBar({ handleSearch }) {
  return (
    <SearchWrapper>         
      <Search
        type='search'
        placeholder='Ingrese su busqueda...'
        onChange={e => handleSearch(e.target.value)}
      />
    </SearchWrapper>
  );
}

export default React.memo(SearchBar);
