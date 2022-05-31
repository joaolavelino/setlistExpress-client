import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authFormToggle } from "../../redux/toggleSlice";
import { userError, userErrorClear, userLogin } from "../../redux/userSlice";
import userService from "../../service/user";

const Login = () => {
  const navigate = useNavigate();
  const form = useSelector((state) => state.toggle.authForm);
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const changeToRegister = (e) => {
    e.preventDefault();
    dispatch(authFormToggle("register"));
  };
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login");
    try {
      const response = await userService.login(fields);
      console.log(response);
      dispatch(userLogin(response.data));
      navigate("/");
    } catch (error) {
      const message = error.response.data.error;
      dispatch(userError({ message: message }));
    }
  };

  return (
    <StyledLogin className={`${form === "login" ? "" : "hidden"}`}>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={fields.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={fields.password}
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit" className="full" onClick={handleSubmit}>
            Login
          </button>
          <button className="gray" onClick={changeToRegister} required>
            New user? Register new account
          </button>
        </div>
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.4s;
  top: 0;
  left: 0;

  &.hidden {
    opacity: 0;
    transform: translateX(-10rem);
    pointer-events: none;
  }
  .buttons {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export default Login;
