import React from "react";
import ImagenBlog1 from '../../medatatheme/assets/images/blog-1.png';
import ImagenBlog2 from '../../medatatheme/assets/images/blog-2.png';
import ImagenBlog3 from '../../medatatheme/assets/images/blog-3.png';

const HomeReportDetail = ({
  id,
  title,
  text,
  url
}) => {

  return (
    <div class="card" key={id}>
      <div class="card-header">
        <img src={ImagenBlog1} alt={title} />
      </div>
      <div class="card-body">
        <div class="margin-bottom">
          <p class="title title--black">
            {title}
          </p>
        </div>
        <div class="margin-bottom">
          <p class="text">
            {text}
          </p>
        </div>
        <a class="button button-primary" href={url}>
          Accede a la info
        </a>
      </div>
    </div>
  );
};

export default HomeReportDetail;
