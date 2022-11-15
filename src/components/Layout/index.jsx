import React from "react";
import Helmet from "react-helmet";
import { Link } from '@reach/router';
import { Footer } from "@civicactions/data-catalog-components";
import Header from "../Medata/header";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";

const Layout = ({
  children,
  title,
  description
}) => {
  return (
    <div className="App">
      <Helmet
        title={`${title} - Medata`}
        description={description}
        defer={false}
        htmlAttributes={{
          "lang": "es"
        }}
      />
      <Header/>
      <main class="main">
        {children}
      </main>
      <Footer links={links} customClasses={config.container} />
    </div>
  );
};

export default Layout;
