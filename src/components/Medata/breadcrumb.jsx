import React from "react";

const Breadcrumb = ({
  themes = []
}) => {
  const [breadcrumbExtra, setBreadcrumbExtra] = React.useState([]);
  React.useEffect(() => {
    const templatesToAddToBreadcrumb = [
      'publisher__name=Medell%C3%8Dn%20en%20Cifras'
    ]
    
    function getUrl() {
      return window.location.href;
    }

    const currectUrl = getUrl();
    const elementNewArray = [];

    if (typeof currectUrl !== 'undefined') {  
      templatesToAddToBreadcrumb.forEach((element, index) => {
        if (currectUrl.includes(element)) {
          let newElement = (<li className="breadcrumb-item" key={index}>
            <a className="breadcrumb-link" href={`/search?${element}`}>Medellín en cifras</a>
          </li>);
          elementNewArray.push(newElement);
        }
      });
    };

    if(themes.length > 0){

    }


    setBreadcrumbExtra(elementNewArray);

  }, [breadcrumbExtra]);
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
        {breadcrumbExtra.length === 0 ? <li className="breadcrumb-item">
          <a className="breadcrumb-link" href="/search">Datos</a>
        </li> : breadcrumbExtra}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
