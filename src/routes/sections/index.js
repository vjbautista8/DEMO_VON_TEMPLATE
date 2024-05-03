import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// components
import { LoadingScreen } from 'src/components/loading-screen';
// layouts
import MainLayout from 'src/layouts/main';
import DashboardLayout from 'src/layouts/dashboard/layout';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
//
import { mainRoutes, HomePage } from './main';
import { authRoutes } from './auth';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------
const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    // {
    //   path: '/',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE
    {
      path: '/DEMO_VON_TEMPLATE',
      element: (
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <TourListPage />
          </Suspense>
        </DashboardLayout>
      ),
    },

    // Auth routes
    // ...authRoutes,
    // ...authDemoRoutes,

    // Dashboard routes
    // ...dashboardRoutes,

    // Main routes
    // ...mainRoutes,

    // // Components routes
    // ...componentsRoutes,

    // No match 404
    { path: '*', element: <h1>Not Found</h1> },
  ]);
}
