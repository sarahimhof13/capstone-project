import { useState, useEffect } from "react";
import Stats from "./Stats";
import Card from "./Card";
import Button from "./DefaultButton";
import axios from "axios";
import { useParams } from "react-router-dom";

function PlanetPage() {
    // Function to get planet by ID
    const [planet, setPlanet] = useState(null);

    const { _id } = useParams();

    useEffect(
        function () {
            async function getPlanetById() {
                try {
                    const response = await axios.get(`planets/${_id}`);
                    setPlanet(response.data);
                } catch (error) {
                    console.log("error", error);
                }
            }
            getPlanetById();
        },
        [_id]
    );

    // Functions to set state of planet info buttons

    const [overviewButton, setOverviewButton] = useState(true);
    const [structureButton, setStructureButton] = useState(false);
    const [geologyButton, setGeologyButton] = useState(false);

    function handleClickOverview() {
        setOverviewButton(true);
        setStructureButton(false);
        setGeologyButton(false);
    }

    function handleClickInternal() {
        setOverviewButton(false);
        setStructureButton(true);
        setGeologyButton(false);
    }

    function handleClickGeology() {
        setOverviewButton(false);
        setStructureButton(false);
        setGeologyButton(true);
    }

    return (
        <main>
            {planet ? (
                <>
                    {/* Mobile planet info buttons container */}
                    <nav className="button-container-mobile">
                        <button className="button-mobile sub-heading" onClick={handleClickOverview}
                            style={{ borderBottom: overviewButton ? `4px solid ${planet.color}` : '' }}>Overview</button>
                        <button className="button-mobile sub-heading" onClick={handleClickInternal}
                            style={{ borderBottom: structureButton ? `4px solid ${planet.color}` : '' }}>Structure</button>
                        <button className="button-mobile sub-heading" onClick={handleClickGeology}
                            style={{ borderBottom: geologyButton ? `4px solid ${planet.color}` : '' }}>Surface</button>
                    </nav>
                    <section className="page-container">
                        {/* Container for planet images */}
                        <div className="img-container">
                            <img className="main-planet-img" src={overviewButton ? planet.images.planet
                                : structureButton ? planet.images.internal : planet.images.planet} alt="" />
                            <img src={geologyButton && planet.images.geology} alt="" className="geology-img"/>
                        </div>
                        {/* Container for side card containing planet info */}
                        <div className="side-card">
                            <Card
                                name={planet.name}
                                body={overviewButton ? planet.overview.content
                                    : structureButton ? planet.structure.content
                                        : planet.geology.content}
                                link={overviewButton ? planet.overview.source
                                    : structureButton ? planet.structure.source
                                        : planet.geology.source}
                                color={planet.color}
                            />
                            {/* Container for planet info buttons */}
                            <div className="button-container">
                                <div className="planet-info-button-container">
                                    <Button number="01" description="Overview" onClick={() => handleClickOverview()} backgroundColor={{ backgroundColor: overviewButton ? planet.color : "" }} />
                                    <Button number="02" description="Internal Structure" onClick={() => handleClickInternal()} backgroundColor={{ backgroundColor: structureButton ? planet.color : "" }} />
                                    <Button number="03" description="Surface Geology" onClick={() => handleClickGeology()} backgroundColor={{ backgroundColor: geologyButton ? planet.color : "" }} />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Container for planet stats */}
                    <section className="info-footer">
                        <Stats heading="Rotation Time" body={planet.rotation} />
                        <Stats heading="Revolution Time" body={planet.revolution} />
                        <Stats heading="Radius" body={planet.radius} />
                        <Stats heading="Average Temp." body={planet.temperature} />
                    </section>
                </>
            ) : null}
        </main>
    )
}

export default PlanetPage;