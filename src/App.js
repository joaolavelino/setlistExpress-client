import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import HeaderLogged from "./components/Header/HeaderLogged";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import LoginRegisterScreen from "./screens/login-register-screen";
import SongsScreen from "./screens/songs-screen";
import { useDispatch } from "react-redux";
import { userLogin } from "./redux/userSlice";
import SongDisplayScreen from "./screens/song-display-screen";
import SongAddEditScreen from "./screens/song-add-edit-screen";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    const loggedToken = JSON.parse(localStorage.getItem("token"));
    if (loggedUser)
      dispatch(userLogin({ user: loggedUser, token: loggedToken }));
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<SongsScreen />} />
          </Route>
          <Route exact path="/login" element={<LoginRegisterScreen />} />
          <Route exact path="/song" element={<SongDisplayScreen />} />
          <Route exact path="/song/:action" element={<PrivateRoute />}>
            <Route exact path="/song/:action" element={<SongAddEditScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
