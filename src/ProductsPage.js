import react from "react"
import {useParams} from "react-router-dom"

export const ProductsPage = () => {
	const {id} = useParams()
	return(
		<>
		<h1> El producto </h1>
		<div> Product Page {id} </div>
		</>
	)
}