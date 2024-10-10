import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {

  const Router =createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<Home/>}>

      </Route>
    ])
  )
    
  
  return (
   <RouterProvider router={Router}/>
  )
}

export default App
