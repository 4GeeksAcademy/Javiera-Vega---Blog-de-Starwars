import { Link } from "react-router-dom";
import logoStarWars from "../assets/img/logo.png"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link
						to={"/"}>
						<img
							src={logoStarWars}
							alt="logo Star Wars"
							className="w-50" />
					</Link>
				</div>


				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites 
						<span className="number-gray bg-secondary bor ms-1 me-1 ">
							{store.favorites.length}
						</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-dark">
						{/* <li><a className="dropdown-item active" href="#">Action</a></li> */}
						{
							store.favorites.map((person) => {
								return (

									<li><a className="dropdown-item active" href="#">{person.properties?.name}</a></li>
								)
							})
						}

					</ul>
				</div>
			</div>
		</nav>
	);
};