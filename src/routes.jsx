import { lazy } from 'react';

const routes = [
    {
        name: 'Home',
        path: '/',
        element: lazy(() => import('./pages/Home'))
    },
    {
        name: 'About',
        path: '/about',
        element: lazy(() => import('./pages/About'))
    },
    {
        name: 'Contact',
        path: '/contact',
        element: lazy(() => import('./pages/Contact'))
    },
    {
        name: 'Blogs',
        path: '/blogs',
        element: lazy(() => import('./pages/Blogs'))
    },
    {
        name: 'All',
        path: '*',
        element: lazy(() => import('./pages/PageNotFound'))
    }
]

export default routes