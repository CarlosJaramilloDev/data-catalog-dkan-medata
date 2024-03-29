import React from "react";

const Breadcrumb = ({
  themes = null,
  curretItem = null
}) => {
  const [breadcrumbExtra, setBreadcrumbExtra] = React.useState([]);

  React.useEffect(() => {
    const templatesToAddToBreadcrumb = [
      'publisher__name=Medell%C3%8Dn%20en%20Cifras',
      'publisher__name=Medellín%20en%20Cifras'
    ];

    function getUrl() {
      return window.location.href;
    }

    const currectUrl = getUrl();
    const elementNewArray = [];
    if (typeof currectUrl !== 'undefined') {
      templatesToAddToBreadcrumb.forEach((element, index) => {
        if (currectUrl.includes(element)) {
          elementNewArray.push(<li className="breadcrumb-item" key={index}>
          <a className="breadcrumb-link" href={`/search/?${element}`}>Medellín en cifras</a>
        </li>);
        }
      });
      if (elementNewArray.length === 0) {
        elementNewArray.push(<li className="breadcrumb-item" key={999}>
          <a className="breadcrumb-link" href={`/search/?keyword=datos`}>Datos</a>
        </li>);
      }
    };

    if (themes && Array.isArray(themes) && themes.length > 0) {
      const theme = themes[0];
      elementNewArray.push(<li className="breadcrumb-item" key={theme.identifier}>
          <a className="breadcrumb-link" href={`/search/?theme=${theme.data}`}>{theme.data}</a>
        </li>);
    }

    if (curretItem && Object.keys(curretItem).length && Object.keys(curretItem).length > 0 && curretItem.title) {
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
