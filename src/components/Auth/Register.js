import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authFormToggle } from "../../redux/toggleSlice";
import { userError, userErrorClear } from "../../redux/userSlice";
import userService from "../../service/user";

const Register = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.toggle.authForm);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeToLogin = (e) => {
    e.preventDefault();
    dispatch(authFormToggle("login"));
  };

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register");
    try {
      await userService.register(fields);
      dispatch(authFormToggle("login"));
    } catch (error) {
      dispatch(userError({ message: error.message }));
      setTimeout(dispatch(userErrorClear()), 3000);
    }
  };

  return (
    <StyledRegister className={`${form === "register" ? "" : "hidden"}`}>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={fields.name}
          onChange={handleChange}
        />
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
          required
          value={fields.password}
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit" className="full" onClick={handleSubmit}>
            Register
          </button>
          <button className="gray" onClick={changeToLogin}>
            Already an user? Proceed to login
          </button>
        </div>
      </form>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.2s;
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
export default Register;
