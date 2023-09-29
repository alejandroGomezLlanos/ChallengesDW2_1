import react from "react"
import {useState} from "react";
import {useEffect} from "react";

export const useFetch = (url) => {
	
	//estado que recibe el json de esa url
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null
	})

	//peticion get
	const getFetch = async () =>{
		const api = await fetch(url);
		const data = await api.json();

		setState({
			data,
			isLoading: false,
			hasError: null
		})
	}

	//recargamos todo con useEffect
	useEffect(() => {
    getFetch();
	}, [url]);

	return {
	...state
	}
}