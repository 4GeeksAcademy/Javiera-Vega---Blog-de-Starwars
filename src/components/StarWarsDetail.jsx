import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const StarWarsDetail = () => {

    const { store } = useGlobalReducer()
    const { theId } = useParams()
    const [personDetail, setPersonDetail] = useState({})
    const { starWarsCharacters } = store

    const getDetailPerson = () => {
        try {
            const resultFind = store.starWarsCharacters.find((item) => item._id == theId)
            setPersonDetail(resultFind)
            console.log(resultFind)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetailPerson()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row col-12 col -md7 justify-content-space-between">
                    <div className="col-6 justify-content-center">
                        <img
                            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${personDetail.uid}.jpg`}
                            alt="image-person-id"
                            className="w-100"
                        />
                    </div>
                    <div className="col-6 text-center">
                        <h1>{personDetail.properties?.name}</h1>
                        <p>{personDetail.description}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptas velit incidunt sit beatae consequuntur facere officia voluptatem expedita dolores enim hic optio magnam iusto nihil illum. Itaque, temporibus! Facere. </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" cont-inf row col-12">
                    <div className=" cont-description">
                        <p>Name</p>
                        <p>Birth Year</p>
                        <p>Gender</p>
                        <p>Heigth</p>
                        <p>Skin Color</p>
                        <p>Eye Color</p>
                    </div>
                    <div className=" cont-description text-center">
                        <p>{personDetail.properties?.name}</p>
                        <p>{personDetail.properties?.birth_year}</p>
                        <p>{personDetail.properties?.gender}</p>
                        <p>{personDetail.properties?.height}</p>
                        <p>{personDetail.properties?.skin_color}</p>
                        <p>{personDetail.properties?.eye_color}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

