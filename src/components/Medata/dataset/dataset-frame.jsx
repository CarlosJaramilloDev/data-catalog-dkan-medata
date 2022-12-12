import React from "react";

const DatasetFrame = ({
  title = 'Visualización de datos',
  url
}) => {
  return (
    <div>
      {/* <iframe src={url} frameborder="0" style={{width: '100%', height: '100vh'}}></iframe> */}
      <script src="https://public.tableau.com/javascripts/api/viz_v1.js"></script>
      <iframe frameborder="0" marginheight="0" marginwidth="0" title={title} allowtransparency="true" allowfullscreen="true" class="tableauViz" style="display: block; width: 1366px; height: 1127px; margin: 0px; padding: 0px; border: none;" src={`${url}?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;:language=es-ES&amp;publish=yes&amp;:loadOrderID=0`}></iframe>
    </div>
  );
};

export default DatasetFrame;
