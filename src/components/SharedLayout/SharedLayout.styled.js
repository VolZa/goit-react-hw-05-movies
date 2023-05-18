import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;

  }
`;

export const Nav = styled.nav`
  display: flex;
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
  display: flex;
   margin: 0 auto;
   padding: 0 20px;
   height: 60px;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;