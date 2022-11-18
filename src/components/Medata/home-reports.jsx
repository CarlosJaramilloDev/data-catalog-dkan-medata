import React from "react";
import HomeReportDetail from "./home-report-detail"

const HomeReports = ({
  title = 'Informes publicados recientemente',
  text = 'Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir',
  items = []
}) => {
  const itemsShow = items.map((item) => {
    return (<HomeReportDetail id={item.identifier} title={item.title} url={`dataset/${item.identifier}`} />);
  });

  return (
    <div>
      <p class="title title--blue">
        {title}
      </p>
      <hr class="separator separator--blue" />
      <p class="text">
        {text}
      </p>
      <div class="grid">
        {itemsShow}
      </div>
    </div>
  );
};

export default HomeReports;
