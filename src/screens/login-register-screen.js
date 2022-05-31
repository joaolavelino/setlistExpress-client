import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ErrorToasty from "../components/Toasties/ErrorToasty";

const LoginRegisterScreen = () => {
  const error = useSelector((state) => state.user.error);

  return (
    <StyledLoginRegister>
      <section>
        <h1>Setlist Express</h1>
        <h2>An agile way to keep your songs always in your hand</h2>
        <div className="forms">
          <Login />
          <Register />
        </div>
      </section>
      <ErrorToasty error={error} />
    </StyledLoginRegister>
  );
};

const StyledLoginRegister = styled.main`
  section {
    width: 40%;
    min-width: 300px;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    @media screen and (max-width: 500px) {
      width: 90%;
    }
    .forms {
      margin-top: 2rem;
      width: 100%;
      position: relative;
    }
  }
`;

export default LoginRegisterScreen;
