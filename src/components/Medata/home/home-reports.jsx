import React from "react";
import excerpts from 'excerpts';
import HomeReportDetail from "./home-report-detail"

const HomeReports = ({
  title = 'Informes publicados recientemente',
  text = 'Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir',
  items = []
}) => {
  const itemsShow = items.map((item) => {
    return (<HomeReportDetail id={item.identifier} title={item.title} text={excerpts(item.description, {words: 35})} url={`dataset/${item.identifier}`} />);
  });

  return (
    <div>
      <p className="title title--blue">
        {title}
      </p>
      <hr className="separator separator--blue" />
      <p className="text">
        {text}
      </p>
      <div className="grid">
        {itemsShow}
      </div>
    </div>
  );
};

export default HomeReports;
