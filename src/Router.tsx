import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routerMeta, { IRouterMeta } from '@/lib/routerMeta';

const lazyImport = (pageName: string) => lazy(() => import(`@/pages/${pageName}`));

const assignedRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: IRouterMeta = routerMeta[componentKey];

  return {
    Component: lazyImport(componentKey),
    props,
  };
});

const Router = () => (
  <Routes>
    {assignedRouter.map(({ Component, props }: any) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default Router;
