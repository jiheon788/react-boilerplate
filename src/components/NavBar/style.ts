import styled from 'styled-components';
import { palette } from '@/styles/theme';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.white};
  color: ${palette.dark};
  transition: all 0.5s;
  min-height: 60px;
  width: 100%;
  /* z-index: 50; */
  padding: 8px 20px;
`;

export const NavMenus = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
