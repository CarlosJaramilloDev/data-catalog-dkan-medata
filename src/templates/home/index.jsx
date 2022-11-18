import React from "react";
import axios from 'axios';
import {
    Blocks,
    Hero,
    IconList,
    IconListItem,
    StatBlock
} from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import ImagenDatosAbiertos from '../../medatatheme/assets/images/main-1.png';
import ImagenMedellinCifras from '../../medatatheme/assets/images/main-2.png';
import ImagenHistoriasDatos from '../../medatatheme/assets/images/main-3.png';
import IconoNumeroDatos from '../../medatatheme/assets/icons/group-data/icon-1.png';
import IconoDependenciaDatos from '../../medatatheme/assets/icons/group-data/icon-2.png';
import IconoNumeroTableros from '../../medatatheme/assets/icons/group-data/icon-3.png';
import IconoNumeroVisitas from '../../medatatheme/assets/icons/group-data/icon-4.png';
import IconoGubernamental from "../../medatatheme/assets/icons/topics/icon-1.png"
import IconoSocial from "../../medatatheme/assets/icons/topics/icon-2.png"
import IconoSalud from "../../medatatheme/assets/icons/topics/icon-3.png"
import IconoPoblacion from "../../medatatheme/assets/icons/topics/icon-4.png"
import IconoInfraestructura from "../../medatatheme/assets/icons/topics/icon-5.png"
import IconoHacienda from "../../medatatheme/assets/icons/topics/icon-6.png"
import IconoEducacion from "../../medatatheme/assets/icons/topics/icon-7.png"
import IconoMedioAmbiente from "../../medatatheme/assets/icons/topics/icon-8.png"
import IconoMovilidad from "../../medatatheme/assets/icons/topics/icon-9.png"
import IconoPlanDesarrollo from "../../medatatheme/assets/icons/topics/icon-10.png"
import IconoOrdenamiento from "../../medatatheme/assets/icons/topics/icon-11.png"
import IconoDesarrolloEconomico from "../../medatatheme/assets/icons/topics/icon-12.png"
import IconoNews from "../../medatatheme/assets/icons/newspaper.png"
import ImagenBlog1 from '../../medatatheme/assets/images/blog-1.png';
import ImagenBlog2 from '../../medatatheme/assets/images/blog-2.png';
import ImagenBlog3 from '../../medatatheme/assets/images/blog-3.png';
import ImagenFondo from '../../medatatheme/assets/images/item.png';
import FeaturedDatasets from '../../components/FeaturedDatasets';

import ListDatasets from './json1.json'
import ListThemes from './json2.json'

import copy from "../../assets/copy.json";

const Home = () => {
    const [datasets, setDatasets] = React.useState(null);
    const [themes, setThemes] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [fDatasets, setFDatasets] = React.useState([])


    React.useEffect(() => {
        async function getDatasets() {
            const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
            //setDatasets(data);

            setDatasets(ListDatasets);
        }
        async function getThemes() {
            const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/theme/items`)
            //setThemes(data);

            setThemes(ListThemes);
        }
        if (datasets === null) {
            getDatasets()
            getThemes();
        }
        if (datasets) {
            const orderedDatasets = datasets.sort(function (a, b) {
                return a.title - b.title;
            });

            setFDatasets(orderedDatasets.length > 3 ? orderedDatasets.slice(orderedDatasets.length - 3, orderedDatasets.length) : orderedDatasets);
        }
    }, [datasets])

    React.useEffect(() => {
        setItems(themes.map(x => {
            let item = {
                identifier: x.identifier,
                ref: `search?theme=${x.data}`,
                title: x.data,
                size: "100"
            };
            return item;
        }))
    }, [themes])

    return (
        <Layout title="Inicio">
            <section class="data-section">
                <div class="container-home">
                    <p class="text text-center">
                        <b>Encuentre los datos abiertos generados y publicados por las diferentes dependencias de la Alcaldía de
                            Medellín,</b>
                        <br />
                        además de las visualizaciones y análisis que se han creado para generar valor y conocimiento para los
                        ciudadanos.
                    </p>
                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <img src={ImagenDatosAbiertos} alt="Datos abiertos" />
                            </div>
                            <div class="card-body">
                                <div class="margin-bottom">
                                    <p class="title title--black">
                                        Datos abiertos
                                    </p>
                                </div>
                                <div class="margin-bottom">
                                    <p class="text">
                                        Búsqueda, exploración y descarga de los conjuntos de datos de la Alcaldía de Medellín
                                    </p>
                                </div>
                                <a class="button button-primary" href="/search">
                                    Accede a la info
                                </a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={ImagenMedellinCifras} alt="Imagen 2" />
                            </div>
                            <div class="card-body">
                                <div class="margin-bottom">
                                    <p class="title title--black">
                                        Medellín en cifras
                                    </p>
                                </div>
                                <div class="margin-bottom">
                                    <p class="text">
                                        Tableros dinámicos para explorar las cifras más importantes de la ciudad
                                    </p>
                                </div>
                                <a class="button button-primary" href="/search">
                                    Accede a la info
                                </a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={ImagenHistoriasDatos} alt="Imagen 3" />
                            </div>
                            <div class="card-body">
                                <div class="margin-bottom">
                                    <p class="title title--black">
                                        Historias de datos
                                    </p>
                                </div>
                                <div class="margin-bottom">
                                    <p class="text">
                                        Notas, narrativas e historias relacionadas con los datos de Medellín
                                    </p>
                                </div>
                                <a class="button button-primary" href="/search">
                                    Accede a la info
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="data-group">
                        <p class="title title--black">
                            Información sobre conjunto de datos
                        </p>
                        <hr class="separator separator--black" />
                        <p class="text">
                            Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
                        </p>
                        <div class="grid">
                            <div class="data-info">
                                <img src={IconoNumeroDatos} alt="" />
                                <p class="data-info-number">
                                    235
                                </p>
                                <p class="text">
                                    Número de conjuntos de datos
                                </p>
                            </div>
                            <div class="data-info">
                                <img src={IconoDependenciaDatos} alt="" />
                                <p class="data-info-number">
                                    25
                                </p>
                                <p class="text">
                                    Dependencias con datos publicados
                                </p>
                            </div>
                            <div class="data-info">
                                <img src={IconoNumeroTableros} alt="" />
                                <p class="data-info-number">
                                    53
                                </p>
                                <p class="text">
                                    Número de tableros de análisis
                                </p>
                            </div>
                            <div class="data-info">
                                <img src={IconoNumeroVisitas} alt="" />
                                <p class="data-info-number">
                                    162.67
                                </p>
                                <p class="text">
                                    Número de visitas a la fecha
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="items-image">
                    <img src={ImagenFondo} />
                </div>
            </section>
            <section class="category-section">
                <div class="container-home">
                    <div class="data-group">
                        <p class="title title--grey">
                            Temáticas de datos
                        </p>
                        <hr class="separator separator--grey" />
                        <p class="text">
                            Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
                        </p>
                        <div class="grid">
                            <div class="category-info">
                                <img src={IconoGubernamental} alt="Gubernamental" />
                                <p class="text">
                                    Gubernamental
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoSocial} alt="Social" />
                                <p class="text">
                                    Social
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoSalud} alt="Salud" />
                                <p class="text">
                                    Salud
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoPoblacion} alt="Población" />
                                <p class="text">
                                    Población
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoInfraestructura} alt="Infraestructura y Catastro" />
                                <p class="text">
                                    Infraestructura y Catastro
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoHacienda} alt="Hacienda, Presupuesto y Contratación" />
                                <p class="text">
                                    Hacienda, Presupuesto y Contratación
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoEducacion} alt="Educación, Cultura y Recreación" />
                                <p class="text">
                                    Educación, Cultura y Recreación
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoMedioAmbiente} alt="Medio Ambiente" />
                                <p class="text">
                                    Medio Ambiente
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoMovilidad} alt="Movilidad" />
                                <p class="text">
                                    Movilidad
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoPlanDesarrollo} alt="Plan de Desarrollo" />
                                <p class="text">
                                    Plan de Desarrollo
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoOrdenamiento} alt="Ordenamiento Territorial" />
                                <p class="text">
                                    Ordenamiento Territorial
                                </p>
                            </div>
                            <div class="category-info">
                                <img src={IconoDesarrolloEconomico} alt="Desarrollo Económico" />
                                <p class="text">
                                    Desarrollo Económico
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="newsletter-section">
                <div class="container-home">
                    <div class="newsletter-info">
                        <div class="d-flex align-items-center">
                            <img class="d-ib" src={IconoNews} alt="newspaper" />
                            <div class="d-ib">
                                <p class="newsletter-title">Suscríbete a nuestros boletines</p>
                                <p class="newsletter-subtitle">Al dar click en Suscribirme acepta los <a> términos y condiciones</a></p>
                            </div>
                        </div>
                        <div class="input-wrapper">
                            <input class="newsletter-input" type="text" placeholder="Ingresa tu correo electrónico…" />
                            <button class="button button-secondary">
                                Suscribirme
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog-section">
                <div class="container-home">
                    <p class="title title--blue">
                        Informes publicados recientemente
                    </p>
                    <hr class="separator separator--blue" />
                    <p class="text">
                        Texto de introducción o explicación del tipo de contenido al cual podrá acceder el usuario visitante… Pendiente por definir
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
                <div class="blog-image">
                    <img src={ImagenFondo} />
                </div>
            </section>


            <div className="home-page">
                <Hero title={copy.hero[0].title} intro={copy.hero[0].intro} gradient={'rgb(22, 46, 81), rgb(9, 120, 188)'} />
                <div className="container">
                    <IconList
                        items={items}
                        component={IconListItem}
                        paneTitle="Dataset Topics y Temas"
                        className="opendata-icon-list"
                    />
                </div>
                <Blocks
                    items={copy.stats}
                    component={StatBlock}
                    containerClass=""
                    blockClass="StatBlock"
                />
                <FeaturedDatasets datasets={fDatasets} />
            </div>
        </Layout>
    );
}

export default Home;
