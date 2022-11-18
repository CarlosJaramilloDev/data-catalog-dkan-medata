import React from "react";
import Helmet from "react-helmet";
import Header from "../Medata/header";
import Footer from "../Medata/footer";

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
        <Footer/>
      </main>
      
    </div>
  );
};

export default Layout;
