import React from "react";

const Breadcrumb = () => {
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
        <li className="breadcrumb-item">
          <a className="breadcrumb-link" href="/search">Búsqueda</a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
