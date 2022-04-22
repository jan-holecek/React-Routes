import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #ffff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  border-bottom: 1px solid #000;
`;
  
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  font-size: 15px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
    font-weight: bold;
  }
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
