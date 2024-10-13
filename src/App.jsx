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

const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<Home />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Route>,
    )
  );

  return <RouterProvider router={Router} />;
};

export default App;
