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
import TopicWrapper from "../../components/Medata/search/civil/components/TopicWrapper";

import orgs from "../../assets/publishers.json";

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
      console.log(data);
      setItem(data);
    }
    if (!state || !state.dataset) {
      getItem();
    }
  }, [id, state]);

  const orgName =
    "publisher" in item && item.publisher ? item.publisher.data.name : "";
  const orgDetails = orgs.filter(org => orgName === org.name);
  const orgImage = orgDetails.length > 0 && orgDetails[0].imageUrl ? orgDetails[0].imageUrl : null;
  const orgDesc = orgDetails.length > 0 && orgDetails[0].description ? orgDetails[0].description : "";
  let renderOrg;
  if (orgDetails.length > 0 && orgDetails[0].imageUrl) {
    renderOrg = <Organization name={orgName} imageUrl={orgImage} description={orgDesc} />;
  } else {
    renderOrg = <Organization name={orgName} description={orgDesc} />;
  }


  const tag = "keyword" in item ? item.keyword : [];
  const theme = "theme" in item ? item.theme : [];

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map(topic => {
        console.log(topic);

        return  /*#__PURE__*/React["default"].createElement('span', { className: 'mr-2'},  /*#__PURE__*/React["default"].createElement(TopicIcon["default"], {
          title: topic,
          height: 15,
          width: 15
        }))
      });
    }
  }

  // // Process content for 'Columns in this Dataset' table.
  // // const labelsT2 = {};
  // // const valuesT2 = {};

  // // columns.forEach((value, index) => {
  // //   labelsT2[index] = { label: value };
  // //   valuesT2[index] = "String";
  // // });

  // // Process content for 'Additional Information' table.
  const labelsT3 = {};
  const valuesT3 = {};

  if (orgName && orgName.length > 0) {
    labelsT3.publisher = { label: "Autor" };
    valuesT3.publisher = orgName;
  }
  if ("identifier" in item && item.identifier) {
    labelsT3.identifier = { label: "Identificador" };
    valuesT3.identifier = item.identifier;
  }
  if ("issued" in item && item.issued) {
    labelsT3.issued = { label: "Fecha publicación" };
    valuesT3.issued = item.issued;
  }
  if ("modified" in item && item.modified) {
    labelsT3.modified = { label: "Fecha modificación" };
    valuesT3.modified = item.modified;
  }
  if ("license" in item && item.license) {
    labelsT3.license = { label: "Licencia" };
    valuesT3.license = `<a href="${item.license}">${item.license}</a>`;
  }
  if ("contactPoint" in item && item.contactPoint && item.contactPoint.fn) {
    labelsT3.contact = { label: "Contacto" };
    valuesT3.contact = item.contactPoint.fn;
  }
  if (
    "contactPoint" in item &&
    item.contactPoint &&
    item.contactPoint.hasEmail
  ) {
    labelsT3.email = { label: "Correo electrónico contacto" };
    valuesT3.email = `<a href="${item.contactPoint.hasEmail}">${item.contactPoint.hasEmail}</a>`;
  }
  if ("accessLevel" in item && item.accessLevel) {
    labelsT3.access = { label: "Nivel de acceso" };
    valuesT3.access = item.accessLevel;
  }
  if ("landingPage" in item && item.landingPage) {
    labelsT3.homepage = { label: "URL de inicio" };
    valuesT3.homepage = `<a href="${item.landingPage}">${item.landingPage}</a>`;
  }

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
            <a class="breadcrumb-link" href="">{item.title}</a>
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
                <span>Fuente:</span> Hadoop Integration
              </li>
              <li class="data-technical-info-item">
                <span>Última modificación:</span> 4 Nov/2022
              </li>
              <li class="data-technical-info-item">
                <span>Vistas:</span> 2.000
              </li>
              <li class="data-technical-info-item">
                <span>Descargas:</span> 822
              </li>
              <li class="data-technical-info-item">
                <span>Formato:</span> <i class="fa-solid fa-file-csv"></i>
              </li>
              <li class="data-technical-info-item">
                <span>Categoria/Etiquetas:</span> {theme.length > 0 && <div className="dc-item-theme">{themes(theme)}</div>}
              </li>
            </ul>
          </div>
        </div>
      {/*
        <div class="data-sheet data-container">
          <div class="data-card">
            <div class="data-card-header">
              <p class="subtitle subtitle--black">
                <b>Ficha técnica</b>
              </p>
              <i id="icon-card" class="fa-solid fa-chevron-up"></i>
            </div>
            <div id="card-body" class="data-card-body" style="display: block;">
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
                    <td>Movilidad</td>
                    <td>Oct. 12 / 2022</td>
                    <td>Nov. 12 / 2022</td>
                    <td>Mensual</td>
                    <td>Comparendos</td>
                    <td>http://www.mintic.gov.co</td>
                    <td>De Lunes, Enero 1, 2018 - 00:00 hasta Viernes, Julio 31, 2020 - 00:00</td>
                  </tr>
                </tbody>
              </table>

              <Table
                configuration={labelsT3}
                data={valuesT3}
                tableclass="metadata"
              />
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
                  </div>
                ) : (
                  <div className="row">
                    <Spinner color="primary" />
                  </div>
                )}
            </div>
          </div>
        </div>*/}
      </section> 







      <div className={config.container}>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            {renderOrg}
            <div className="dc-block-wrapper">
              The information on this page is also available via the{" "}
              <Link
                to={`/dataset/${item.identifier}/api`}
                state={{ dataset: { ...item } }}
              >
                API
              </Link>.
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            {Object.keys(item).length
              ? (
                <div>
                  <h1>{item.title}</h1>
                  {theme.length > 0 && <div className="dc-item-theme">{themes(theme)}</div>}
                  <Text value={item.description} />
                  {(hasWindow && item.distribution) &&
                    item.distribution.map(dist => {
                      return <ResourceTemplate key={dist.identifier} resource={dist} identifier={dist.identifier} />;
                    })}
                  <Tags tags={tag} path="/search?keyword=" label="Tags" />
                  <Table
                    configuration={labelsT3}
                    data={valuesT3}
                    tableclass="metadata"
                  /></div>
              ) : (<div className="row">
                <Spinner color="primary" />
              </div>
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dataset;
