//tercer challenge(?)
import {useState} from "react";
import {AddCategory, GifGrid} from "./components"

const GiftExpertApp = () => {

	//mi set se categorias
	const [categories, setCategories] = useState(["Zodiac"])
	//metodo para agregar categorias a la lista
	//abriendo lista y metiendo algo nuevo con set
	const onAddCategory = (category) => {
		setCategories(list => [...list, category])
	}

	return(
	<>
		<h1> Gif Expert </h1>

		<AddCategory onAddCategory={onAddCategory} />

		<ol> {
			categories.map((category, key) => {
				return <GifGrid category={category} key={key}/>
			})
		} </ol>
	</>
	);
}

export default GiftExpertApp;