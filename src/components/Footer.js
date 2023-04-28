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
  background-color: rgb(255 111 0);
`;

const Logo = styled.h3`
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>Designed and Developed by Victor Mitra</Logo>
    </Container>
  );
};

export default Footer;
