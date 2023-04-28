import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  background-color: #ff7d00;
`;

const Logo = styled.h1`
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Logo>React Album</Logo>
    </Container>
  );
};

export default Header;
