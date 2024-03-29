// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components';


// /const NavbarList = styled.ul`
// display: flex; 
// /* You can add additional flex properties here */
// `;

// const Navbar = () => {
//   return (
//     <nav>
//         <div className='menuIcon'>
//             <ul className='navbar-list'>
//                 <li>
//                     <NavLink to= "/">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to= "/about">About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to= "/services">Services</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to= "/contect">Contect</NavLink>
//                 </li>
//             </ul>
//         </div>
//     </nav>
//   )


// }

// export default Navbar;



import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const NavbarList = styled.ul`
  display: flex; 
  gap: 4.8rem;
  list-style: none;
  }
  .navbar-list a {
    text-decoration: none;
  }
  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.2s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }

`;

const Navbar = () => {
  return (
    <nav>
      <div className="menuIcon">
        <NavbarList className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </NavbarList>
      </div>
    </nav>
  );
};

export default Navbar;
