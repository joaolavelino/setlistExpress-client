import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import HeaderDropdown from "./HeaderDropdown";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../redux/toggleSlice";

const HeaderLogged = () => {
  const dispatch = useDispatch();

  const toggleHeader = () => {
    dispatch(toggleMobileNav());
  };

  return (
    <StyledHeader>
      <div className="header-title">
        <h1>Setlist Express</h1>
      </div>
      <div className="header-menu">
        <MobileNavigation>
          <HeaderDropdown />
          <FiMenu onClick={toggleHeader} />
        </MobileNavigation>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-menu {
    display: flex;
    align-items: center;
  }
`;

const DesktopNavigation = styled.nav`
  * {
    cursor: pointer;
  }
`;
const MobileNavigation = styled.nav`
  * {
    cursor: pointer;
  }
`;

export default HeaderLogged;
