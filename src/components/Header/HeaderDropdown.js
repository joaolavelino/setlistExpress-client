import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggleMobileNav } from "../../redux/toggleSlice";
import { userLogout } from "../../redux/userSlice";
import userService from "../../service/user";
import { AiOutlineClose } from "react-icons/ai";

const HeaderDropdown = () => {
  const dropdown = useSelector((state) => state.toggle.mobileNav);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const toggleHeader = () => {
    dispatch(toggleMobileNav());
  };

  const logout = () => {
    userService.logout();
    dispatch(userLogout());
    navigate("/login");
  };

  return (
    <MobileDropdown
      className={`${!dropdown ? "hidden" : ""}`}
      onClick={toggleHeader}
    >
      <ul>
        <div className="close">
          <AiOutlineClose />
        </div>
        <div className="pages">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/song/add">
            <p>Add Song</p>
          </Link>
        </div>
        <div className="account">
          <li>User Edit</li>
          <button className="gray small" onClick={logout}>
            Logout
          </button>
        </div>
      </ul>
    </MobileDropdown>
  );
};

const MobileDropdown = styled.nav`
  position: fixed;
  top: 0px;
  right: 2rem;
  z-index: 25;
  width: 15rem;
  padding: 2rem 1.5rem;
  border-bottom: 5px solid darkorange;
  background-color: #272727;
  transition: 0.2s;
  opacity: 1;
  color: #e0e0e0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;

  a {
    transition: 200ms;
    &:hover {
      color: darkorange;
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    div {
      border-top: 1px solid darkgray;
      padding: 1rem 0 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &:first-child {
        border: none;
      }
      &.close {
        width: 100%;
        display: flex;
        align-items: flex-end;
        padding: 0 0 0;
        svg {
          font-size: 2rem;
          cursor: pointer;
          transition: 200ms;
          &:hover {
            color: darkorange;
          }
        }
      }
    }
  }
  &.hidden {
    transform: translateY(-10rem) scaleY(0);
    opacity: 0;
  }
`;

export default HeaderDropdown;
