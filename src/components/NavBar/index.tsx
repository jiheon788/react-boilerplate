import * as S from './style';
import { useNavigate } from 'react-router-dom';
import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import Logo from '../common/Logo';
import token from '@/lib/token';

const NavBar = () => {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    token.removeToken('token');
    window.location.reload();
  };

  return (
    <S.Nav>
      <Logo />
      <S.NavMenus>
        {Object.keys(routerMeta).map((componentKey: string, index: number) => {
          const menu: IRouterMeta = routerMeta[componentKey];

          if (menu.isShow)
            return (
              <li key={index} role="presentation" onClick={() => navigate(menu.path)}>
                {menu.name}
              </li>
            );
        })}
        {token.getToken('token') ? (
          <li role="presentation" onClick={() => onClickLogOut()}>
            로그아웃
          </li>
        ) : (
          <li role="presentation" onClick={() => navigate('/auth')}>
            로그인
          </li>
        )}
      </S.NavMenus>
    </S.Nav>
  );
};

export default NavBar;
