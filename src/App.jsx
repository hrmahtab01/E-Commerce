import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import LayoutComponent from './Layout/RootComponent'
import RootComponent from './Layout/RootComponent'

const App = () => {

  const Router =createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<RootComponent/>}>
        <Route index element={<Home/>}/>

      </Route>
    ])
  )
    
  
  return (
   <RouterProvider router={Router}/>
  )
}

export default App
