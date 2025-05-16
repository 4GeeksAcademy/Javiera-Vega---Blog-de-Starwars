import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const StarWarsDetail = () => {

    const { store, dispatch } = useGlobalReducer()
    const { theId } = useParams()
    const [personDetail, setPersonDetail] = useState({})
    const { starWarsCharacters } = store

    const getDetailPerson =  () => {
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
                    <div className="col-6">
                        <h1>{personDetail.properties?.name}</h1>
                        <p>{personDetail.description} </p>
                        
                    </div>
                </div>

            </div>

            <div >
                <h1>Details{theId}</h1>
            </div>
        </>
    )
}

