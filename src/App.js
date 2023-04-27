import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { GetAllPost } from "./api/index";
import Loader from "./components/Loader/Loader";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

function App() {
  //let [albumData, setalbumData] = useState(null);
  let [loading, setLoader] = useState(true);

  const fetchData = async () => {
    let allAlbumData = await GetAllPost();
    // console.log("Helllo Data", allAlbumData);
    // setalbumData(allAlbumData);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {/* <Header /> */}
      {loading && <Loader />}
      <DataContainer>{/* <Footer /> */}</DataContainer>
    </Container>
  );
}

export default App;
