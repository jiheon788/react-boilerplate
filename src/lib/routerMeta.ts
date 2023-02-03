export interface IRouterMeta {
  name: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: '홈',
    path: '/',
    isShow: false,
  },
  AuthPage: {
    name: '로그인',
    path: '/auth',
    isShow: false,
  },
};

export default routerMeta;
