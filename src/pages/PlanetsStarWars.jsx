import { useEffect, } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const PlanetsStarWars = () => {

    const { store, dispatch } = useGlobalReducer()
    const { planets } = store

    const getAllplanets = async () => {
        try {
            const response = await fetch(`${store.urlBaseStarWars}/planets`)
            const data = await response.json()

            const planet = await Promise.all(
                data.results.map(async (item) => {
                    const res = await fetch(item.url)
                    const detail = await res.json()
                    return detail.result
                })
            )
            localStorage.setItem("planets", JSON.stringify(planet))
            console.log(planet)
            dispatch({
                type: "ADD_PLANETS",
                payload: planet
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllplanets()
    }, [])

    const handleClick = (data) => {
        dispatch({
            type: "ADD_FAVORITES", payload: data

        })
    }

    return (
        <div className="container p-0">
            <div className="row col-12">
                <div className="text-start mt-5 text-danger p-0">
                    <h1>Planets</h1>
                </div>
                <div className="card-array ">
                    {
                        planets.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className="card-image h-100vh">
                                    <img
                                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`}
                                        alt="image-planet"
                                        className="w-100 "
                                    />
                                    <div className="card-body p-3">
                                        <h5 className="card-title pb-3">{item.properties.name}</h5>
                                        <p className="card-text mb-0">Gender: {item.properties.population}</p>
                                        <p className="card-text mb-3">Hair color: {item.properties.terrain}</p>
                                        <div className="d-flex justify-content-between">
                                            <Link
                                                to={`/planets-detail/${item._id}`}
                                                className="btn btn-primary">
                                                Learn more!
                                            </Link>
                                            <button
                                                className="btn btn-outline-warning"
                                                onClick={() => handleClick(item)}>
                                                {
                                                    store.favorites.includes(item) ?
                                                        <i className="fa-solid fa-heart"></i> :
                                                        <i className="heart fa-regular fa-heart"></i>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}; 