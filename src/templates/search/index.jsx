import React from 'react';
import { useLocation } from "@reach/router"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import Search from "../../components/Medata/search/civil/components/Search";
import SearchSidebar from "../../components/Medata/search/civil/templates/SearchSidebar";
import SearchContent from "../../components/Medata/search/civil/templates/SearchContent";
import Layout from "../../components/Layout";
import config from "../../assets/config";

const SearchTemplate = ({ path }) => {
  const location = useLocation();
  return (
    <Layout title="Resultados" headerClass='header header--small'>
      <nav className="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="/">
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="/">Medata</a>
          </li>
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="/search">Búsqueda</a>
          </li>
        </ol>
      </nav>

        <Search
          searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={path}
          location={location}
          normalize={normalizeItems}
        >
          <div className="movility">
            <SearchSidebar />
            <SearchContent />
          </div>
        </Search>
    </Layout>
  );
}

export default SearchTemplate;
