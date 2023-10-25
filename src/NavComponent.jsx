import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom"
import {AboutPage} from "./AboutPage"
import {HomePage} from "./HomePage"
import {LoginPage} from "./LoginPage"
import {ProductsPage} from "./ProductsPage"

export const Navcomponent = () => {
	return(
	<>
	<NavLink to="/"> Home </NavLink>
	<NavLink to="AboutPage"> AboutPage </NavLink>
	<NavLink to="LoginPage"> LoginPage </NavLink>
	<NavLink to="product/3"> Producto por ID </NavLink>

	<Routes>
		<Route path="/" element={ <HomePage/> } />
		<Route path="AboutPage" element={ <AboutPage/> } />
		<Route path="LoginPage" element={ <LoginPage/> } />

		<Route path="product/">
			<Route path=":id" element={ <ProductsPage/> } />
		</Route>
	</Routes>
	</>
	);
}