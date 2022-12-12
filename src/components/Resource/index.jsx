import React from "react";

import FileDownload from "../Medata/search/civil/components/FileDownload";
import Resource from "../Medata/search/civil/components/Resource";
import DataTable from "../Medata/search/civil/templates/DataTable";
import DataTableHeader from "../Medata/search/civil/templates/DataTableHeader";
import DatasetFrame from "../Medata/dataset/dataset-frame";

const ResourceTemplate = ({ resource }) => {
  const type = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('mediaType') ? resource.data.mediaType.split("/") : '';
  const backup = type ? type[1] : 'data';
  const format = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('format') ? resource.data.format : backup;

  const downloadURL = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('downloadURL') ? resource.data.downloadURL : '';
  const accessURL = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('accessURL') ? resource.data.accessURL : downloadURL;
  const rootURL = `${process.env.REACT_APP_ROOT_URL}/`;

  function getResourceRender(format) {
    if (!format) return null;
    let content = null;
    switch (format) {
      case 'csv':
        content = (
          <Resource
            apiURL={rootURL}
            identifier={resource.identifier}
            resource={resource}
            showDBColumnNames={true}
          >
            <FileDownload
              title={`${resource.data.title || 'Archivo'} (Clic para descargar)`}
              label={resource.data.downloadURL}
              format={format}
              downloadURL={downloadURL ? downloadURL : accessURL}
            />
            <hr />
            <DataTableHeader />
            <DataTable />
          </Resource>
        )
        break;
      case 'tablero':
        content = (
          <div
          >
            <FileDownload
              title={`${resource.data.title || 'URL'} (Clic para ver)`}
              label={resource.data.downloadURL}
              format={format}
              downloadURL={downloadURL ? downloadURL : accessURL}
            />
            <hr />
            <DatasetFrame url={downloadURL ? downloadURL : accessURL}/>
          </div>
        )
        break;

      default:
        content = (
          <FileDownload
            title={`${resource.data.title || 'Archivo o URL'} (Clic para ver o descargar)`}
            label={resource.data.downloadURL}
            format={format}
            downloadURL={resource.data.downloadURL}
          />
        );
        break;
    }

    return content;
  }

  return (
    <div id={`resource_${resource.identifier}`}>
      {getResourceRender(format.toLowerCase())}
    </div>
  );
};

export default ResourceTemplate;
