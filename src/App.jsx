import { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from './pages/layout/PageLayout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<PageLayout />}>
              {
                routes.map((route, index) => <Route key={`${index}${route.path}`} path={route.path} Component={route.element}></Route>)
              }
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
