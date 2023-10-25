import react from "react"
import {useParams} from "react-router-dom"

export const ProductsPage = () => {
	const {id} = useParams()
	const {params} = useSearchParams()

	const navigate = useNavigate()

	const onLogout = () => {
		navigate("/login")
	}

	return(
		<>
		<h1> El producto </h1>
		<div> Product Page {id} </div>
		</>
	)
}