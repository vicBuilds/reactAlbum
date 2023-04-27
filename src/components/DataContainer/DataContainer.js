import React from "react";
import { useSelector } from "react-redux";

const DataContainer = () => {
  const dataFromRedux = useSelector((state) => {
    return state.album.albumData;
  });

  console.log("Data From Redux is ", dataFromRedux);

  return <div style={{}}>DataContainer</div>;
};

export default DataContainer;
