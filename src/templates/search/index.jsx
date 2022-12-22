import React from 'react';
import { useLocation } from "@reach/router"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import Search from "../../components/Medata/search/civil/components/Search";
import SearchSidebar from "../../components/Medata/search/civil/templates/SearchSidebar";
import SearchContent from "../../components/Medata/search/civil/templates/SearchContent";
import Breadcrumb from '../../components/Medata/breadcrumb';
import Layout from "../../components/Layout";

const SearchTemplate = ({ path }) => {
  const location = useLocation();

  const template = 'theme=';

  function getUrl() {
    return window.location.href;
  }

  const currectUrl = getUrl();
  const themes = [];
  if (typeof currectUrl !== 'undefined') {
    if (currectUrl.includes(template)) {
      let themesString = currectUrl.substring(currectUrl.indexOf("theme=") + 6);
      let themeArray = themesString.split(',');
      let theme = themeArray[0];
      themes.push({identifies: theme, data: theme.replace('%20', ' ')});
    }
  };

  return (
    <Layout title="Resultados" headerClass='header header--small'>
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
          
          <SearchSidebar
            title={themes && themes.length && themes.length > 0 ? themes[0].data : ''}
          />
          <SearchContent />
        </div>
      </Search>
    </Layout>
  );
}

export default SearchTemplate;
