import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 300px;
`;
const PosterImage = styled.img`
  flex: 3;
  width: 100%;
  max-height: 70%;
`;

const DetailContainer = styled.div`
  background-color: #2a2727;
  width: 100%;
`;

const TitleBar = styled.h3`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 300;
`;

const MovieDetail = () => {
  const Location = useLocation();
  //console.log(Location);

  //console.log("Hello", Location);
  const { Title, Year, Type, Poster } = Location.state;

  // console.log("Title is ", Title);
  // console.log("Poster is ", Poster);

  return (
    <Container>
      <PosterImage src={Poster}></PosterImage>
      <DetailContainer>
        <TitleBar>{Title}</TitleBar>
        <TitleBar>{Type}</TitleBar>
        <TitleBar>{Year}</TitleBar>
      </DetailContainer>
    </Container>
  );
};

export default MovieDetail;
