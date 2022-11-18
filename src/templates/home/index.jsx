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
import ImagenFondo from '../../medatatheme/assets/images/item.png';
import FeaturedDatasets from '../../components/FeaturedDatasets';
import HomeCardsLinks from "../../components/Medata/home-cards-links";
import HomeDataSets from "../../components/Medata/home-data-sets";
import HomeDataTopics from "../../components/Medata/home-data-topics";
import HomeNewslater from "../../components/Medata/home-newslater";
import HomeReports from "../../components/Medata/home-reports";


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
                    <HomeCardsLinks />
                    <HomeDataSets />
                </div>
                <div class="items-image">
                    <img src={ImagenFondo} />
                </div>
            </section>
            <section class="category-section">
                <div class="container-home">
                    <HomeDataTopics items={items}/>
                </div>
            </section>
            <section class="newsletter-section">
                <div class="container-home">
                    <HomeNewslater />
                </div>
            </section>
            <section class="blog-section">
                <div class="container-home">
                    <HomeReports />
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
