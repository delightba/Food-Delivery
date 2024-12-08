import React from 'react';
import {createRoot} from 'react-dom/client'
import router from './shared/Router';
import { RouterProvider } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
