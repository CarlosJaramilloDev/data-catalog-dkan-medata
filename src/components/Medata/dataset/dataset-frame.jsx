import React from "react";

const DatasetFrame = ({
  url
}) => {
  return (
    <div>
      <iframe src={url} frameborder="0" style={{width: '100%', height: '100vh'}}></iframe>
    </div>
  );
};

export default DatasetFrame;
