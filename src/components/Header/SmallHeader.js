import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { MdOutlineArrowBackIos, MdOutlineArrowUpward } from "react-icons/md";
import HeaderDropdown from "./HeaderDropdown";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../redux/toggleSlice";

const SmallHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const toggleHeader = () => {
    dispatch(toggleMobileNav());
  };

  return (
    <StyledHeader
      onClick={() => setShow(!show)}
      className={`${show ? "" : "hidden"}`}
    >
      <div className="header-menu">
        <HeaderDropdown />
        <MdOutlineArrowBackIos onClick={() => navigate(-1)} />
        <FiMenu onClick={toggleHeader} />
        <MdOutlineArrowUpward onClick={() => setShow(!show)} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 9rem;
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0.5rem;
  left: auto;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 200ms;
  border-bottom: 10px solid darkorange;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  &.hidden {
    transform: translateY(-4rem);
  }

  .header-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    transition: 200ms;
    &:hover {
      color: orange;
    }
  }
`;

const DesktopNavigation = styled.nav`
  * {
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    * {
      display: none;
    }
  }
`;
const MobileNavigation = styled.nav`
  * {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    * {
      display: none;
    }
  }
`;

export default SmallHeader;
