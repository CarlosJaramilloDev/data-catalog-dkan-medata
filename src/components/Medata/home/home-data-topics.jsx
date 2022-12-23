import React from "react";
import HomeDataTopicDetail from "./home-data-topic-detail"

const HomeDataTopics = ({
  title = 'Temáticas de datos',
  text = 'Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir.',
  items = []
}) => {
  const itemsShow = items.map((item) => {
    return (
      <HomeDataTopicDetail id={item.identifier} url={`/${item.ref}`} title={item.title} />
    );
  });
  
  return (
    <div className="data-group">
      <p className="title title--grey">{title}</p>
      <hr className="separator separator--purple" />
      <p className="text">
      {text}
      </p>
      <div className="grid">
       {itemsShow}
      </div>
    </div>
  );
};

export default HomeDataTopics;
