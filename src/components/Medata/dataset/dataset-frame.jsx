import React from "react";

const DatasetFrame = ({
  url
}) => {
  return (
    <div className="grid">
      <div className="card">
        <div className="card-body">
          <iframe src={url} frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default DatasetFrame;
