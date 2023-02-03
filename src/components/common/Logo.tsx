import styled from 'styled-components';
import logo from '@/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  return <LogoImg src={logo} onClick={() => navigate('/')}></LogoImg>;
};

const LogoImg = styled.img`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 180px;
  cursor: pointer;
`;

export default Logo;
