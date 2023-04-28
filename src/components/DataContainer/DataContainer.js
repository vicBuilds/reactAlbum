import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./DataContainer.css";
import styled from "styled-components";
import UpdatePageContainer from "../UpdatePageContainer.js/UpdatePageContainer";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
`;

const DataContainer = () => {
  const pageSize = 10;
  const dataFromRedux = useSelector((state) => {
    return state.album.albumData;
  });

  const data = dataFromRedux;
  const [currentPage, setCurrentPage] = useState(1);
  const [albumData, setAlbumData] = useState([]);
  const [updateDisplay, setUpdateDisplay] = useState(false);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    setAlbumData(data);
  }, []);

  const totalPages = Math.ceil(albumData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = albumData.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateDataOnClick = (object) => {
    setUpdateDisplay(true);
    //console.log("Hello Object ", object);
    setUpdateData(object);
  };

  const handleDelete = (id) => {
    let newData = albumData.filter((item) => {
      return item.id != id;
    });

    setAlbumData(newData);
  };

  return (
    <Container>
      <h2>Album Data</h2>
      <div className="table-container" style={{ width: "90%", margin: "18px" }}>
        <div className="table" style={{ width: "90%" }}>
          <div className="table-header">
            {albumData.length != 0 &&
              Object.keys(albumData[0]).map((key) => (
                <div key={key}>{key.toUpperCase()}</div>
              ))}
            <div key="update-header">Update</div>
            <div key="delete-header">Delete</div>
          </div>
          {currentData.map((object, index) => (
            <div className="table-row" key={index}>
              {Object.keys(object).map((key) => (
                <div key={key}>{object[key]}</div>
              ))}
              <div key="update">
                <Button
                  onClick={() => {
                    updateDataOnClick(object);
                  }}
                >
                  Update
                </Button>
              </div>
              <div key="delete">
                <Button
                  onClick={() => {
                    handleDelete(object.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            className="pagination-button"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className="pagination-button"
              disabled={currentPage === index + 1}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      {/* <UpdatePageContainer
        style={{ display: updateDisplay ? "block" : "none" }}
      ></UpdatePageContainer> */}

      {updateDisplay && (
        <UpdatePageContainer
          data={updateData}
          allAlbumData={albumData}
          setUpdateDisplay={setUpdateDisplay}
          setAlbumData={setAlbumData}
        />
      )}
    </Container>
  );
};

export default DataContainer;
