import React from "react";
import axios from 'axios';
import Layout from '../../components/Layout';
import ImagenFondo from '../../medatatheme/assets/images/item.png';
import HomeCardsLinks from "../../components/Medata/home/home-cards-links";
import HomeDataSets from "../../components/Medata/home/home-data-sets";
import HomeDataTopics from "../../components/Medata/home/home-data-topics";
import HomeNewslater from "../../components/Medata/home/home-newslater";
import HomeReports from "../../components/Medata/home/home-reports";
import HomeSocialMedia from "../../components/Medata/home/home-social-media";

const Home = () => {
    const [datasets, setDatasets] = React.useState(null);
    const [themes, setThemes] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [fDatasets, setFDatasets] = React.useState([])


    React.useEffect(() => {
        async function getDatasets() {
            const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
            setDatasets(data);

            //setDatasets(ListDatasets);
        }
        async function getThemes() {
            const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/theme/items`)
            setThemes(data);

            //setThemes(ListThemes);
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
            console.log('themes')
            console.log(x)
            let item = {
                identifier: x.identifier,
                ref: `search?theme=${x.data}`,
                title: x.data,
            };
            return item;
        }))
    }, [themes])

    return (
        <Layout title="Inicio">
            <section className="data-section">
                <div className="container-home">
                    <p className="text text-center">
                        <b>Encuentre los datos abiertos generados y publicados por las diferentes dependencias de la Alcaldía de
                            Medellín,</b>
                        <br />
                        además de las visualizaciones y análisis que se han creado para generar valor y conocimiento para los
                        ciudadanos.
                    </p>
                    <HomeCardsLinks />
                    <HomeDataSets />
                </div>
                <div className="items-image">
                    <img src={ImagenFondo} />
                </div>
            </section>
            <section className="category-section">
                <div className="container-home">
                    <HomeDataTopics items={items}/>
                </div>
            </section>
            <section className="newsletter-section">
                <div className="container-home">
                    <HomeNewslater />
                </div>
            </section>
            <section className="social-section">
                <div className="container-home">
                    <HomeSocialMedia />
                </div>
            </section>
            <section className="blog-section">
                <div className="container-home">
                    <HomeReports items={fDatasets}/>
                </div>
                <div className="blog-image">
                    <img src={ImagenFondo} />
                </div>
            </section>
        </Layout>
    );
}

export default Home;
