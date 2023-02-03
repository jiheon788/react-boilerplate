import styled from 'styled-components';
import { breakpoints } from '@/styles/theme';

const ContainerDiv = styled.div<{ isSmall?: boolean }>`
  /* small */
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* mobile */
  @media screen and (min-width: ${breakpoints.mobile}px) {
    max-width: 540px;
  }
  /* tablet */
  @media screen and (min-width: ${breakpoints.tablet}px) {
    max-width: 720px;
    max-width: ${(props) => (props.isSmall ? '50%' : '720px')};
  }
  /* desktop */
  @media screen and (min-width: ${breakpoints.desktop}px) {
    max-width: 960px;
    max-width: ${(props) => (props.isSmall ? '50%' : '960px')};
  }
  /* super desktop */
  @media screen and (min-width: ${breakpoints.superdesktop}px) {
    max-width: 1140px;
    max-width: ${(props) => (props.isSmall ? '50%' : '1140px')};
  }
`;

export default ContainerDiv;
