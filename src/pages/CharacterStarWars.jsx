import { useEffect, } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const CharacterStarWars = () => {

    const { store, dispatch } = useGlobalReducer()
    const { starWarsCharacters } = store

    const getAllCharacters = async () => {
        try {
            const response = await fetch(`${store.urlBaseStarWars}/people`)
            const data = await response.json()

            const people = await Promise.all(
                data.results.map(async (person) => {
                    const res = await fetch(person.url)
                    const detail = await res.json()
                    return detail.result
                })
            )
            localStorage.setItem("starWarsCharacters", JSON.stringify(people))
            console.log(people)
            dispatch({
                type: "ADD_CHARACTERS",
                payload: people
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCharacters()
    }, [])

    const handleClick = (person) => {

        const personFav = store.favorites.find(item => item._id === person._id);

        if (personFav) {
            dispatch({
                type: "DELETE_FAVORITES", payload: person._id
            });
        } else {
            dispatch({
                type: "ADD_FAVORITES", payload: person
            })
        }
    }

    return (
        <div className="container p-0">
            <div className="row col-12">
                <div className="text-start mt-5 text-danger p-0">
                    <h1>Character</h1>
                </div>
                <div className="card-array ">
                    {
                        starWarsCharacters.map((person) => {
                            return (
                                <div
                                    key={person._id}
                                    className="card-image h-100vh">
                                    <img
                                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${person.uid}.jpg`}
                                        alt="image-person"
                                        className="w-100 "
                                    />
                                    <div className="card-body p-3">
                                        <h5 className="card-title pb-3">{person.properties.name}</h5>
                                        <p className="card-text mb-0">Gender: {person.properties.gender}</p>
                                        <p className="card-text mb-0">Hair color: {person.properties.hair_color}</p>
                                        <p className="card-text mb-3">Eye color: {person.properties.eye_color}</p>
                                        <div className="d-flex justify-content-between">
                                            <Link
                                                to={`/star-wars-detail/${person._id}`}
                                                className="btn btn-primary">
                                                Learn more!
                                            </Link>
                                            <button
                                                className="btn btn-outline-warning"
                                                onClick={() => handleClick(person)}>
                                                {
                                                    store.favorites.includes(person) ?
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