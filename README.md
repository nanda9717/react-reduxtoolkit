# Install React Project By Vite

----------------------------------------------------------

npm create vite
> project name: DemoProject
> select other option accordingly

----------------------------------------------------------

> cd DemoProject
> npm install
> npm run dev

# To Run Project

npm run dev

# react-reduxtoolkit
Use redux toolkit library for state management in React

-----------------------------------------------------------
npm install @reduxjs/toolkit

npm install react-redux

-----------------------------------------------------------

# API Integration - AXIOS

npm install axios

# Install MUI

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material

# Install react-toastify

npm install --save react-toastify

Add Configuration file : utils -> common -> toast.js

Import in App.jsx : 

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
<ToastContainer />

# Use absolute path in react

- create jsconfig.json file

-----------------------------------------------------------
{
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
}

-----------------------------------------------------------

# Use absolute path in vite

> vite.config.js

-------------------------------------------------------------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

-------------------------------------------------------------

> jsconfig.js

------------------------------------------------------------
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  }
}

------------------------------------------------------------

> Import like this - import { toast } from '@/utils/common/toast';
