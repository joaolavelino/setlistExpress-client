import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import LoginRegisterScreen from "./screens/login-register-screen";
import SongsScreen from "./screens/songs-screen";

const Routing = () => {
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PrivateRoute />}>
        <Route exact path="/" element={<SongsScreen />} />
      </Route>
      <Route exact path="/login" element={<LoginRegisterScreen />} />
    </Routes>
  </BrowserRouter>;
};

export default Routing;
