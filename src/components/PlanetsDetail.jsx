import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const PlanetsDetail = () => {

    const { store } = useGlobalReducer()
    const { theId } = useParams()
    const [planetsDetail, setPlanetsDetail] = useState({})
    const { planets } = store

    const getDetailPlanet = () => {
        try {
            const resultFind = store.planets.find((item) => item._id == theId)
            setPlanetsDetail(resultFind)
            console.log(resultFind)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetailPlanet()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row col-12 col -md7 justify-content-space-between">
                    <div className="col-6 justify-content-center">
                        <img
                            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planetsDetail.uid}.jpg`}
                            alt="image-person-id"
                            className="w-100"
                        />
                    </div>
                    <div className="col-6 text-center">
                        <h1>{planetsDetail.properties?.name}</h1>
                        <p>{planetsDetail.description}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptas velit incidunt sit beatae consequuntur facere officia voluptatem expedita dolores enim hic optio magnam iusto nihil illum. Itaque, temporibus! Facere. </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" cont-inf row col-12 d-flex">
                    <div className=" cont-description">
                        <p>Name</p>
                        <p>Climate</p>
                        <p>Population</p>
                        <p>Orbital Period</p>
                        <p>Rotation Period</p>
                        <p>Diameter</p>
                    </div>
                    <div className=" cont-description text-center">
                        <p>{planetsDetail.properties?.name}</p>
                        <p>{planetsDetail.properties?.climate}</p>
                        <p>{planetsDetail.properties?.population}</p>
                        <p>{planetsDetail.properties?.orbital_period}</p>
                        <p>{planetsDetail.properties?.rotation_period}</p>
                        <p>{planetsDetail.properties?.diameter}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

