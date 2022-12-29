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
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    const template = 'theme=';

    function getUrl() {
      return window.location.href;
    }

    const currectUrl = getUrl();
    
    if (typeof currectUrl !== 'undefined') {
      if (currectUrl.includes(template)) {
        let themesString = currectUrl.substring(currectUrl.indexOf("theme=") + 6);
        let themeArray = themesString.split(',');
        let theme = themeArray[0];
        setThemes([{ identifies: theme, data: decodeURIComponent(theme) }]);
      }
    };
  }, []);

  return (
    <Layout title="Resultados" headerClass='header header--small'>
      {themes && Array.isArray(themes) && <Breadcrumb themes={themes} curretItem={{}} />}
      <Search
        searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
        defaultFacets={defaultFacets}
        sortOptions={sortOptions}
        setSearchUrl={true}
        path={path}
        location={location}
        normalize={normalizeItems}
      >
        <div className="container movility">
          <SearchSidebar
            title={themes && Array.isArray(themes) && themes.length > 0 ? themes[0].data : ''}
            withIcon={themes && Array.isArray(themes) && themes.length > 0 ? true : false}
          />
          <SearchContent />
        </div>
      </Search>
    </Layout>
  );
}

export default SearchTemplate;
