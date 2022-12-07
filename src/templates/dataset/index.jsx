import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from '@reach/router';
import Layout from '../../components/Layout';
import config from "../../assets/config";
import ResourceTemplate from "../../components/Resource";
import { Spinner } from 'reactstrap';

import Text from "../../components/Medata/search/civil/components/Text";
import Organization from "../../components/Medata/search/civil/components/Organization";
import Table from "../../components/Medata/search/civil/components/Table";
import Tags from "../../components/Medata/search/civil/components/Tags";
import TopicIcon from "../../components/Medata/search/civil/templates/TopicIcon";

const Dataset = ({ id, location }) => {
  const { state } = location;
  const [item, setItem] = useState(state && state.dataset ? state.dataset : {})
  const [hasWindow, checkForWindow] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      checkForWindow(true);
    }
    async function getItem() {
      const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items/${id}?show-reference-ids`);
      console.log("ITEM", data);
      setItem(data);
    }
    if (!state || !state.dataset) {
      getItem();
    }
  }, [id, state]);

  const orgName = "publisher" in item && item.publisher ? item.publisher.data.name : "";
  const tag = "keyword" in item ? item.keyword : [];
  const theme = "theme" in item ? item.theme : [];

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map(topic => {
        return <span className="mr-2"><TopicIcon title={topic.data} height={16} width={16} key={topic.identifier} /></span>
      });
    }
  }

  function formats(distribution) {
    console.log('dist', distribution);
    if (!distribution) {
      return null;
    }

    if (Array.isArray(distribution)) {
      var distributionWithUniqueFormats = getUniqueFormats(Object.entries(distribution));
      console.log('unic dist', distributionWithUniqueFormats);
      return distributionWithUniqueFormats.map(function (dist, idx) {
        dist = dist.data;
        var type = dist.mediaType ? dist.mediaType.split('/') : '';
        var backup = type ? type : 'data';
        var format = dist.format ? dist.format : backup;
        var finishIcon = '';
        switch (format) {
          case 'pdf':
          case 'csv':
            finishIcon = format
            break;
          case 'zip':
          case 'data':
          default:
            finishIcon = 'archive'
            break;
        }
        return <i className={`mr-2 fa-solid fa-file-${finishIcon}`} key={idx} />;
      });
    }

    return null;
  }

  function getUniqueFormats(formats) {
    var unique = [];
    return formats.reduce(function (a, b) {
      if (unique.indexOf(b[1].format) === -1) {
        unique.push(b[1].format);
        a.push(b[1]);
      }
      return a;
    }, []);
  };

  return (
    <Layout title={`Dataset - ${item.title}`} headerClass='header header--small'>
      <nav class="breadcrumb">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="/">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
          <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="/">Medata</a>
          </li>
          <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="/">{item.title}</a>
          </li>
        </ol>
      </nav>

      <section class="header-section data">
        <div class="data-container">
          <p class="title title--black mb-0">{item.title}</p>
          <p class="paragraph paragraph--black margin-bottom-sm">
            <Text value={item.description} />
          </p>
        </div>
      </section>

      <section class="data-technical-section">
        <div class="data-technical-info">
          <div class="data-container">
            <ul class="data-technical-info-list">
              <li class="data-technical-info-item">
                <span>Fuente:</span> {orgName}
              </li>
              <li class="data-technical-info-item">
                <span>Última modificación:</span> {item.modified || ''}
              </li>
              <li class="data-technical-info-item">
                <span>Vistas:</span>
              </li>
              <li class="data-technical-info-item">
                <span>Descargas:</span>
              </li>
              <li class="data-technical-info-item">
                <span>Formato(s):</span> {formats(item.distribution)}
              </li>
              <li class="data-technical-info-item">
                <span>Categoria/Etiquetas:</span> {theme.length > 0 && themes(theme)}
              </li>
            </ul>
          </div>
        </div>

        <div class="data-sheet data-container">
          <div class="data-card">
            <div class="data-card-header">
              <p class="subtitle subtitle--black">
                <b>Ficha técnica</b>
              </p>
              <i id="icon-card" class="fa-solid fa-chevron-up"></i>
            </div>
            <div id="card-body" class="data-card-body" style={{ display: 'block' }}>
              <table class="data-table">
                <tbody><tr>
                  <th>Dependencias</th>
                  <th>Fecha de modificación</th>
                  <th>Fecha de publicación</th>
                  <th>Frecuencia</th>
                  <th>Identificador</th>
                  <th>Estándar de datos</th>
                  <th>Cobertura temporal</th>
                </tr>
                  <tr>
                    <td></td>
                    <td>{("modified" in item && item.modified) ? item.modified : ''}</td>
                    <td>{("issued" in item && item.issued) ? item.issued : ''}</td>
                    <td></td>
                    <td>{("identifier" in item && item.identifier) ? item.identifier : ''}</td>
                    <td>{("conformsTo" in item && item.conformsTo) ? item.conformsTo : ''}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="data-view">
          <div class="data-card">
            <div class="data-card-header">
              <p class="subtitle subtitle--black">
                <b>Vista previa</b>
              </p>
            </div>
            <div class="data-card-body">
              {Object.keys(item).length
                ? (
                  <div>
                    {(hasWindow && item.distribution) &&
                      item.distribution.map(dist => {
                        return <ResourceTemplate key={dist.identifier} resource={dist} identifier={dist.identifier} />;
                      })}
                    <Tags tags={tag} path="/search?keyword=" label="Tags" />
                    <hr />
                    <p>La información de esta página tambien estña disponible via {" "}
                      <Link
                        to={`/dataset/${item.identifier}/api`}
                        state={{ dataset: { ...item } }}
                      >
                        API
                      </Link></p>
                  </div>


                ) : (
                  <div className="row">
                    <Spinner color="primary" />
                  </div>
                )}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dataset;
