import {useEffect} from "react"
import {useState} from "react"
import {getGifs} from "../helpers/getGifs"

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);

	//get imagenes
	const getImages = async () => {
		const images = await getGifs (category)
		setImages(images);
	}

	//use effect que llama todo cuando se carga componente
	useEffect(()=>{
		getImages();
	},[])

	return{
		images: images,
		isloading: false
	}
}