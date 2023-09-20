import {useState} from "react";
import {useEffect} from "react";
import {GifItem} from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs"

const GifGrid = ({category}) => {

	const {images, isLoading} = useFetchGifs(category);

	return (
		<>
			<h3> {category} </h3>
			<div className="card-grid">
			{
				images.map((images, key) => {
					return <GifItem key={key} {...images}></GifItem>
				})
			}
			</div>
		</>
	);
}
export default GifGrid;