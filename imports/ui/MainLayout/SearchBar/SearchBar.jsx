import React from 'react';
import { InputStyled, SearchIcon } from './styled';

const SearchBar = () =>{
    return(
        <InputStyled 
            placeholder='Search ground, team or someone' 
            prefix={< SearchIcon />}
        />
    )
}

export default SearchBar;