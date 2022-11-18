import React from 'react';
import { useLocation } from "@reach/router"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { Search, SearchSidebar, SearchContent } from "@civicactions/data-catalog-components";
import Layout from "../../components/Layout";
import config from "../../assets/config";

const SearchTemplate = ({ path }) => {
  const location = useLocation();
  return (
    <Layout title="Resultados" headerClass='header header--small'>
      <nav className="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="">
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="">Medata</a>
          </li>
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="">Datos Abiertos</a>
          </li>
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="">Movilidad</a>
          </li>
        </ol>
      </nav>

      <div className="container movility">
        <div className="sidenav">
          {/* <p><i className="fa-solid fa-car"></i> Movilidad</p>
                <ul className="sidenav-list">
                    <li className="sidenav-item sidenav-item-dropdown">
                        <a className="title" href="#">Tipo de contenido</a>
                        <ul className="sidenav-list-dropdown">
                            <li className="sidenav-item">
                                <a href="">Datos (35)</a>
                            </li>
                            <li className="sidenav-item">
                                <a href="">Medellín en cifras (35)</a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidenav-item">
                        <a href="#">Dependencias</a>
                    </li>
                </ul> */}
          {/*  <SearchSidebar /> */}
        </div>
        <div className="movility-content">
          {/* <SearchContent /> */}
        </div>
      </div>


      <hr />
      <hr />


      <div className={`dc-page ${config.container}`}>
        <h1>Datasets</h1>
        <Search
          searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={path}
          location={location}
          normalize={normalizeItems}
        >
          <div className="row">
            <SearchSidebar />
            <SearchContent />
          </div>
        </Search>
      </div>
    </Layout>
  );
}

export default SearchTemplate;
