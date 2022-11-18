import React from "react";
import HomeDataTopicDetail from "./home-data-topic-detail"

const HomeDataTopics = ({
  title = 'Temáticas de datos',
  text = 'Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir.',
  items = []
}) => {
  const itemsShow = items.map((item) => {
    console.log(item);
    return (
      <HomeDataTopicDetail id={item.identifier} url={`/${item.ref}`} title={item.title} />
    );
  });
  
  return (
    <div class="data-group">
      <p class="title title--grey">{title}</p>
      <hr class="separator separator--grey" />
      <p class="text">
      {text}
      </p>
      <div class="grid">
       {itemsShow}
      </div>
    </div>
  );
};

export default HomeDataTopics;
