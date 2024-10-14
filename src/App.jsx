import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

import RootComponent from "./Layout/RootComponent";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Account from "./Pages/Account";
import About from "./Pages/About";

const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<Home />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/About" element={<About/>}/>

      </Route>,
    )
  );

  return <RouterProvider router={Router} />;
};

export default App;
