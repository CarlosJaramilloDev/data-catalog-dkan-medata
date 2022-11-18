import React from "react";
import ImagenBlog1 from '../../medatatheme/assets/images/blog-1.png';
import ImagenBlog2 from '../../medatatheme/assets/images/blog-2.png';
import ImagenBlog3 from '../../medatatheme/assets/images/blog-3.png';

const HomeReports = ({
  title = 'Informes publicados recientemente',
  text = 'Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir',
  items = []
}) => {

  items.map((item, index) => {
    console.log(item);
  })
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
        <div class="card">
          <div class="card-header">
            <img src={ImagenBlog1} alt="Imagen 1" />
          </div>
          <div class="card-body">
            <div class="margin-bottom">
              <p class="title title--black">
                Título del informe o estudio
              </p>
            </div>
            <div class="margin-bottom">
              <p class="text">
                Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
              </p>
            </div>
            <a class="button button-primary">
              Accede a la info
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src={ImagenBlog2} alt="Imagen 2" />
          </div>
          <div class="card-body">
            <div class="margin-bottom">
              <p class="title title--black">
                Título del informe o estudio
              </p>
            </div>
            <div class="margin-bottom">
              <p class="text">
                Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
              </p>
            </div>
            <a class="button button-primary">
              Accede a la info
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src={ImagenBlog3} alt="Imagen 3" />
          </div>
          <div class="card-body">
            <div class="margin-bottom">
              <p class="title title--black">
                Título del informe o estudio
              </p>
            </div>
            <div class="margin-bottom">
              <p class="text">
                Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
              </p>
            </div>
            <a class="button button-primary">
              Accede a la info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReports;
