import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <h1>FragAbs</h1>
      {/* <h1>Login</h1>
      <h1>Register</h1> */}
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.2);
  /* background-image: linear-gradient(
    43deg,
    #4159d04b 0%,
    #c850c058 46%,
    #ffcd7045 100%
  ); */
  /* border: 1px solid rgba(255, 255, 255, 0.125); */
  color: #ffffff;
  text-shadow: 0 0 10px #fff;
  padding: 10px 0;
  margin: 0 70px;
  margin-top: 10px;
  border-radius: 10px;

  h1 {
    margin: 0 50px;
  }
`;
