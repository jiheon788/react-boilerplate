import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routerMeta from 'meta/routerMeta';
import { assignRouteProps } from 'utils/assignRouteProps';

const lazyImport = (containerName: string) => lazy(() => import(`containers/${containerName}`));

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: any = assignRouteProps(routerMeta[componentKey]);

  return {
    Component: lazyImport(componentKey),
    props,
  };
});

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {assignRouter.map(({ Component, props }) => (
          <Route
            key={props.path}
            path={props.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            }
            {...props}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
