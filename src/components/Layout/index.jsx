import React from "react";
import Helmet from "react-helmet";
import Header from "../Medata/header";
import Footer from "../Medata/footer";

const Layout = ({
  children,
  title,
  description,
  headerClass = 'header',
  dataLength
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
      <Header headerClass={headerClass} dataLength={dataLength}/>
      <main className={ (headerClass === 'header') ? 'main' : '' }>
        {children}
        <Footer/>
      </main>
      
    </div>
  );
};

export default Layout;
