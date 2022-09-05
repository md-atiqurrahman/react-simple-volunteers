import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <CustomLink to='/home'>Main</CustomLink>
            <CustomLink to='/volunteers'>Volunteers</CustomLink>
        </nav>
    );
};

export default Header;