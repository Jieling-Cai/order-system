import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './routes/index';
import './App.css'
function App() {
  return (
    <RouterProvider router={Routes()}></RouterProvider>
  )
}

export default App
