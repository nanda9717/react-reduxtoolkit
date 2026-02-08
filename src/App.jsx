import { Suspense, useState, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from './pages/layout/PageLayout';
import withAuth from './utils/auth/withAuth';

function App() {

  const LazyDashboard = lazy(() => import('./pages/auth/Dashboard'));
  const LazyProfile = lazy(() => import('./pages/auth/Profile'));

  const AuthDashboard = withAuth(LazyDashboard);
  const AuthProfile = withAuth(LazyProfile);

  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<PageLayout />}>
              {
                routes.map((route, index) => <Route key={`${index}${route.path}`} path={route.path} element={<route.element />}></Route>)
              }
              {/* The protected route uses the HOC-wrapped component */}
                <Route path="/dashboard" element={<AuthDashboard />} />
                <Route path="/profile" element={<AuthProfile />} />
              {/* Other routes can be added here */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
