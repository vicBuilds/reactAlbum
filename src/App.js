import { useState, useEffect } from "react";
import styled from "styled-components";
import { GetAllPost } from "./api/index";
import { saveAllDataToStore } from "./redux/dataSlice";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader/Loader";
import DataContainer from "./components/DataContainer/DataContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
`;

const DataSpace = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  //let [albumData, setalbumData] = useState(null);
  let [loading, setLoader] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    let allAlbumData = await GetAllPost();
    console.log("Helllo Data", typeof allAlbumData);
    // setalbumData(allAlbumData);
    dispatch(saveAllDataToStore(allAlbumData));
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <DataSpace>
        {loading && <Loader />}
        {!loading && <DataContainer />}
      </DataSpace>
      <Footer />
    </Container>
  );
}

export default App;
