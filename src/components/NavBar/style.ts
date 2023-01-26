import styled from 'styled-components';
import { palette } from 'styles/palette';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: ${palette.dark};
  transition: all 0.5s;
`;
