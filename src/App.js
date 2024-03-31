// import './App.css';

// import Qverview from './components/Forms/Qverview/Qverview';
// import FormControls from './components/Forms/FormControls/FormControls'

import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Header} from './components/Header/Header.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.js'));
const FormsPage = lazy(() => import('./pages/FormsPage/FormsPage.js'));
const ComponentsPage = lazy(() => import('./pages/ComponentsPage/ComponentsPage.js'));
const UtilitiesPage = lazy(() =>
  import('./pages/UtilitiesPage/UtilitiesPage.js')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.js'));

const App = () => {
    return (
      <>
      <Suspense
      fallback={
<>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </>
      }
    >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="forms" element={<FormsPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="utilities" element={<UtilitiesPage />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
        {/* <h1>Forms</h1>
          <Qverview/>
          <FormControls/> */}
      </>

    )
        
}

export default App