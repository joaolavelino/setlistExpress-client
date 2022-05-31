import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-title">
        <h1>Setlist Express</h1>
      </div>
      <div className="header-menu">
        <nav>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
