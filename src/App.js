import { useState, useEffect } from "react";
import styled from "styled-components";
import { GetAllPost } from "./api/index";
import { saveAllDataToStore } from "./redux/dataSlice";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader/Loader";
import DataContainer from "./components/DataContainer/DataContainer";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

function App() {
  //let [albumData, setalbumData] = useState(null);
  let [loading, setLoader] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    let allAlbumData = await GetAllPost();
    console.log("Helllo Data", allAlbumData);
    // setalbumData(allAlbumData);
    dispatch(saveAllDataToStore(allAlbumData));
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {!loading && <DataContainer />}
    </Container>
  );
}

export default App;
