import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
        <NavLink to= "/">
            <img src="./image/pngwing.com.png" alt="" className='logo'/>
        </NavLink>
        <Navbar />
    </MainHeader>
  )
};

const MainHeader = Styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 12%;
  }
`;

export default Header;