import React from "react";
import ImagenBlog1 from '../../../medatatheme/assets/images/blog-1.png';

const HomeReportDetail = ({
  id,
  title,
  text,
  url
}) => {

  return (
    <div className="card" key={id}>
      {/* <div className="card-header">
        <img src={ImagenBlog1} alt={title} />
      </div> */}
      <div className="card-body">
        <div className="margin-bottom">
          <p className="title title--black">
            {title}
          </p>
        </div>
        <div className="margin-bottom">
          <p className="text">
            {text}
          </p>
        </div>
        <a className="button button-primary" href={url}>
           CONOCE MÁS
        </a>
      </div>
    </div>
  );
};

export default HomeReportDetail;
