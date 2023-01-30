export type RouterMetaType = {
  [key: string]: any;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: '홈',
    path: '/',
    isHide: 'false',
  },
  AuthPage: {
    name: '로그인',
    path: '/auth',
    isHide: 'false',
  },
};

export default routerMeta;
