import React, { useState } from "react";
import styled from "styled-components";
import { CreatePost } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { saveAllDataToStore } from "../../redux/dataSlice";
import Loader from "../Loader/Loader";

const UpdateContainer = styled.div`
  background-color: white;
  height: 670px;
  width: 1200px;
  z-index: 5;
  position: absolute;
  top: "30%";
  left: "30%";
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

const AddPageContainer = ({
  setAddDisplay,
  albumData,
  setAlbumData,
  availableId,
  setAvailableID,
}) => {
  const [loading, setLoader] = useState(false);
  const [userIDInput, setUserIdInput] = useState(4);
  const [albumtitle, setAlbumTitle] = useState("");

  const AddData = async (e) => {
    setLoader(true);
    e.preventDefault();

    let callAPiToUpdateData = await CreatePost({
      albumId: availableId,
      title: albumtitle,
      userId: userIDInput,
    });

    console.log("New Album Created", callAPiToUpdateData);

    let newChunk = {
      useId: userIDInput,
      id: availableId,
      title: albumtitle,
    };
    let newAlbumData = [...albumData, newChunk];
    setLoader(false);
    setAlbumData(newAlbumData);
    setAvailableID(availableId + 1);
    setAddDisplay(false);
  };

  return (
    <UpdateContainer>
      {loading && <Loader style={{ position: "relative", top: "800px" }} />}
      {!loading && (
        <>
          <Title>Add New Data</Title>
          <FormContainer>
            <Form>
              <InputDataContainer>
                <Label>Album ID </Label>
                <br />
                <InputData value={availableId} disabled="true" />
              </InputDataContainer>
              <InputDataContainer>
                <Label>User ID </Label>
                <br />
                <InputData
                  value={userIDInput}
                  onChange={(e) => {
                    setUserIdInput(e.target.value);
                  }}
                  type="number"
                />
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
                    AddData(e);
                  }}
                >
                  Add Data
                </Button>
              </InputDataContainer>
              <InputDataContainer>
                <Button
                  onClick={(e) => {
                    setAddDisplay(false);
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

export default AddPageContainer;
