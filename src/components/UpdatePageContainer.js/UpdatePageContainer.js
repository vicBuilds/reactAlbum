import React, { useState } from "react";
import styled from "styled-components";
import { UpdatePost } from "../../api";
import { useDispatch, useSelector } from "react-redux";
// import { saveAllDataToStore } from "../../redux/dataSlice";
import Loader from "../Loader/Loader";

const UpdateContainer = styled.div`
  background-color: white;
  position: absolute;
  height: 95%;
  width: 90%;
  z-index: 5;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: rgb(22 22 20);
  border: 1px solid black;
  color: white;
`;

const Title = styled.h1`
  flex: 1;
  width: 100%;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  opacity: 0.9;
  height: 50px;
  width: 140px;
  background-color: #b70404;
  color: white;
  margin-top: 20px;
  border: none;
  font-size: large;
  cursor: pointer;
  transition: all 0.9s ease;
  &:hover {
    background-color: red;
    transform: scale(1.03);
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const InputData = styled.input`
  font-size: larger;
  background-color: grey;
  color: white;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Label = styled.label`
  font-size: 25px;
  font-weight: bold;
`;

const InputDataContainer = styled.div`
  margin-top: 10px;
`;

const UpdatePageContainer = ({
  data,
  setUpdateDisplay,
  setAlbumData,
  allAlbumData,
}) => {
  //   console.log("Data are ", data);
  //   console.log("UpdateDisplay Function are ", setUpdateDisplay);
  let dispatch = useDispatch();
  // let allUpdatedDataFromRedux  = useSelector((state) => {
  //   return state.album.albumData;
  // });

  let allUpdatedDataFromRedux = allAlbumData;

  const [albumtitle, setAlbumTitle] = useState(data.title);
  const [loading, setLoader] = useState(false);

  const updateData = async (e) => {
    e.preventDefault();
    setLoader(true);
    let dataFromClient = {
      title: albumtitle,
      userId: data.userId,
    };
    if (data.id <= 100) {
      let sendUpdateToApi = await UpdatePost(data.id, dataFromClient);
    }

    let updatedDataChunk = [];

    allUpdatedDataFromRedux.forEach((element) => {
      let tempData = {};
      if (element.id == data.id) {
        tempData = { ...element, title: albumtitle };
      } else {
        tempData = { ...element };
      }
      updatedDataChunk.push(tempData);
    });

    console.log("Updated Data ", updatedDataChunk);

    //dispatch(saveAllDataToStore(updatedDataChunk));
    setLoader(false);
    setAlbumData(updatedDataChunk);
    setUpdateDisplay(false);
  };

  return (
    <UpdateContainer>
      {loading && <Loader style={{ position: "relative", top: "800px" }} />}
      {!loading && (
        <>
          <Title>Update Data</Title>
          <FormContainer>
            <Form>
              <InputDataContainer>
                <Label>Album ID </Label>
                <br />
                <InputData value={data.id} disabled="true" />
              </InputDataContainer>
              <InputDataContainer>
                <Label>User ID </Label>
                <br />
                <InputData value={data.userId} disabled="true" />
              </InputDataContainer>
              <InputDataContainer>
                <Label>Title </Label>
                <br />
                <InputData
                  value={albumtitle}
                  style={{
                    height: "100px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "0",
                    textAlign: "start",
                  }}
                  onChange={(e) => {
                    setAlbumTitle(e.target.value);
                  }}
                />
              </InputDataContainer>
              <InputDataContainer>
                <Button
                  onClick={(e) => {
                    updateData(e);
                  }}
                >
                  Update Data
                </Button>
              </InputDataContainer>
              <InputDataContainer>
                <Button
                  onClick={(e) => {
                    setUpdateDisplay(false);
                  }}
                >
                  Cancel
                </Button>
              </InputDataContainer>
            </Form>
          </FormContainer>
        </>
      )}
    </UpdateContainer>
  );
};

export default UpdatePageContainer;
