import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #242424;
  &.active {
    color: orangered;
  }
`;
export const Container = styled.div`
   max-width: 960px;
   margin: 0 auto;
   padding: 0 16px;
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;