import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPlanet() {
    // Set initial state of planets object
    const initialState = {
        name: "",
        overview: {
            content: "",
            source: "",
        },
        structure: {
            content: "",
            source: "",
        },
        geology: {
            content: "",
            source: "",
        },
        rotation: "",
        revolution: "",
        radius: "",
        temperature: "",
        images: {
            planet: "",
            internal: "",
            geology: "",
        },
        color: "",
    };
    const [planet, setPlanet] = useState(initialState);

    const { _id } = useParams();
    const navigate = useNavigate();

    // function to get planet by ID
    useEffect(
        function () {
            async function updatePlanet() {
                try {
                    const response = await axios.get(`/planets/${_id}`);
                    setPlanet(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            updatePlanet();
        },
        [_id]
    );

    //  function to update planet details on submission
    function handleSubmit(event) {
        event.preventDefault();
        async function updatePlanet() {
            try {
                await axios.patch(`/planets/${planet._id}`, planet);
                navigate(`/planets${planet._id}`);
                window.location.reload()
            } catch (error) {
                console.log(error);
            }
        }
        updatePlanet();
    }

    // Function to access nested object in database
    const handleChange = level => event => {
        if (!level) {
            // Assume root level
            setPlanet({
                ...planet,
                [event.target.name]: event.target.value
            })
        } else {
            setPlanet({
                ...planet,
                [level]: {
                    ...planet[level],
                    [event.target.name]: event.target.value
                }
            })
        }
    };

    //   Function to cancel editing a planet
    function handleCancel() {
        navigate(`/planets${planet._id}`);
    }

    return (
        <div className="form-container">
            <h1 className="main-heading">Edit {planet.name}</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label className="sub-heading">Planet Name</label>
                    <input
                        name="name"
                        type="text"
                        value={planet.name}
                        onChange={handleChange()}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="sub-heading">Color</label>
                    <input
                        name="color"
                        type="text"
                        value={planet.color}
                        onChange={handleChange()}
                        className="form-input"
                    />
                    <small className="body-text">Format: HEX code or color name e.g 'red'</small>
                </div>
                <div className="form-group">
                    <h3 className="medium-heading">Overview</h3>
                    <label className="sub-heading">Content</label>
                    <textarea
                        name="content"
                        type="url"
                        required
                        value={planet.overview.content}
                        onChange={handleChange('overview')}
                        className="form-input input-text-block"
                    />
                    <label className="sub-heading">Source</label>
                    <input
                        name="source"
                        type="url"
                        required
                        value={planet.overview.source}
                        onChange={handleChange('overview')}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <h3 className="medium-heading">Structure</h3>
                    <label className="sub-heading">Content</label>
                    <textarea
                        name="content"
                        type="url"
                        required
                        value={planet.structure.content}
                        onChange={handleChange('structure')}
                        className="form-input input-text-block"
                    />
                    <label className="sub-heading">Source</label>
                    <input
                        name="source"
                        type="url"
                        required
                        value={planet.structure.source}
                        onChange={handleChange('structure')}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <h3 className="medium-heading">Geology</h3>
                    <label className="sub-heading">Content</label>
                    <textarea
                        name="content"
                        type="url"
                        required
                        value={planet.geology.content}
                        onChange={handleChange('geology')}
                        className="form-input input-text-block"
                    />
                    <label className="sub-heading">Source</label>
                    <input
                        name="source"
                        type="url"
                        required
                        value={planet.geology.source}
                        onChange={handleChange('geology')}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <h3 className="medium-heading">Stats</h3>
                    <label className="sub-heading">Rotation</label>
                    <input
                        name="rotation"
                        required
                        value={planet.rotation}
                        onChange={handleChange()}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="sub-heading">Revolution</label>
                    <input
                        name="revolution"
                        type="text"
                        required
                        value={planet.revolution}
                        onChange={handleChange()}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="sub-heading">Radius</label>
                    <input
                        name="radius"
                        type="text"
                        required
                        value={planet.radius}
                        onChange={handleChange()}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="sub-heading">Temperature</label>
                    <input
                        name="temperature"
                        type="text"
                        required
                        value={planet.temperature}
                        onChange={handleChange()}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <h3 className="medium-heading">Images</h3>
                    <small className="body-text">Format: Link to image</small>
                    <label className="sub-heading">Planet</label>
                    <input
                        name="planet"
                        type="text"
                        required
                        value={planet.images.planet}
                        onChange={handleChange('images')}
                        className="form-input"
                    />
                    <label className="sub-heading">Internal</label>
                    <input
                        name="internal"
                        type="text"
                        required
                        value={planet.images.internal}
                        onChange={handleChange('images')}
                        className="form-input"
                    />
                    <label className="sub-heading">Geology</label>
                    <input
                        name="geology"
                        type="text"
                        required
                        value={planet.images.geology}
                        onChange={handleChange('images')}
                        className="form-input"
                    />
                </div>

                <div className="form-button-container">
                    <button type="submit" className="modify-button">
                        Update
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="modify-button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPlanet;
