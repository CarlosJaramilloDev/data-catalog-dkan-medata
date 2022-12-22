import React from "react";

const Breadcrumb = ({
  themes = null,
  curretItem = null
}) => {
  console.log('themes', themes);
  console.log('curretItem', curretItem);
  const [breadcrumbExtra, setBreadcrumbExtra] = React.useState([]);

  React.useEffect(() => {
    const templatesToAddToBreadcrumb = [
      'publisher__name=Medell%C3%8Dn%20en%20Cifras'
    ];

    function getUrl() {
      return window.location.href;
    }

    const currectUrl = getUrl();
    const elementNewArray = [];
    console.log('currectUrl', currectUrl);
    if (typeof currectUrl !== 'undefined') {
      templatesToAddToBreadcrumb.forEach((element, index) => {
        if (currectUrl.includes(element)) {
          elementNewArray.push(<li className="breadcrumb-item" key={index}>
          <a className="breadcrumb-link" href={`/search?${element}`}>Medellín en cifras</a>
        </li>);
        }
      });
      if (elementNewArray.length === 0) {
        elementNewArray.push(<li className="breadcrumb-item" key={'datos'}>
          <a className="breadcrumb-link" href={`/search?`}>Datos</a>
        </li>);
      }
    };

    console.log('themesEF', themes);
    if (themes && themes.length && themes.length > 0) {
      const theme = themes[0];
      console.log('theme', theme);
      elementNewArray.push(<li className="breadcrumb-item" key={theme.identifier}>
          <a className="breadcrumb-link" href={`/search?theme=${theme.data}`}>{theme.data}</a>
        </li>);
    }

    console.log('curretItemEF', curretItem);
    if (curretItem && Object.keys(curretItem) > 0 && curretItem.title) {
      elementNewArray.push(<li className="breadcrumb-item" key={curretItem.title}>
          <a className="breadcrumb-link" href={getUrl()}>{curretItem.title}</a>
        </li>);
    }

    setBreadcrumbExtra(elementNewArray);

  }, [themes, curretItem]);
  return (
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
        {breadcrumbExtra}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
