import React from "react";

const DatasetFrame = ({
  title = 'Visualización de datos',
  url
}) => {
  return (
    <div>
      <iframe title={title} src={url} frameborder="0" style={{width: '100%', height: '100vh'}}></iframe>
    </div>
  );
};

export default DatasetFrame;
