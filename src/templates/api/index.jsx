import React from 'react';
import config from "../../assets/config";
import Layout from "../../components/Layout";
import ApiDocs from "../../components/Medata/search/civil/components/ApiDocs";

const ApiDocsFull = ({ path }) => (
  <Layout title="Documentacion generl del API" headerClass='header header--small'>
  <div className={`dc-page ${config.container}`}>
    <div className="page-content">
      {typeof window !== `undefined` && (
        <ApiDocs endpoint={process.env.REACT_APP_ROOT_URL} />
      )}
    </div>
  </div>
  </Layout>
);

export default ApiDocsFull;
