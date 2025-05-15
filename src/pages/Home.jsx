import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterStarWars } from "./CharacterStarWars.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

 

 	return (
		<>
		<CharacterStarWars />
		</>
	);
}; 