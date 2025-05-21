import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterStarWars } from "./CharacterStarWars.jsx";
import { PlanetsStarWars } from "./PlanetsStarWars.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<CharacterStarWars />
			<PlanetsStarWars />
		</>
	);
}; 