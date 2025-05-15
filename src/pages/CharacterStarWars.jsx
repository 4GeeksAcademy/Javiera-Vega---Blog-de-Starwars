import { useEffect, } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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
                                    key={person.id}
                                    className="card-image h-100vh">
                                    <img
                                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${person.uid}.jpg`}
                                        alt="..."
                                        className="w-100 "
                                    />
                                    <div className="card-body p-3">
                                        <h5 className="card-title">{person.properties.name}</h5>
                                        <p className="card-text">Gender: {person.properties.gender}</p>
                                        <p className="card-text">Hair color: {person.properties.hair_color}</p>
                                        <p className="card-text">Eye color: {person.properties.eye_color}</p>
                                        <a href="#" className="btn btn-primary">Learn more!</a>
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