//segundo 
import {useState} from "react";
import PropTypes from "prop-types"
import {useFetch} from "./hooks/useFetch"

const FirstApp = ({title, value}) => {
	
	//use state
	const [counter, setCounter] = useState(value);

	//mi custoom hook siendo invocado
	const { data, isLoading, hasError } = useFetch(counter);

	//funcion para agregar
	const handleAdd = () => {
		setCounter(counter + 1);
	}

	//funcion reducir
	const handleSubstract = () => {
		setCounter(counter - 1);
	}

	//funcion reset
	const handleReset = () => {
		setCounter(0);
	}

	//mi set cuando cambia el form
	const onInputChange = (evt) => {
		setCounter(evt.target.value);
	}

	//agrega url a estado y limpia el campo de texto
	const onSubmit = (evt) => {
		evt.preventDefault();
		//onAddCategory(inputValue);
		setCounter("");
	}

	return(
	<>
		<h1> {title} </h1>
		<h1> {counter} </h1>
		<span> Botones </span>
		<button onClick={ () => handleAdd() } > Sumar 1 </button>
		<button onClick={ () => handleSubstract() } > Restar 1 </button>
		<button onClick={ () => handleReset() } > Reset </button>
		<h1> llamando a useFetch </h1>
		<h2> Escribe url aqui </h2>
		<form onSubmit={(event => onSubmit(event))}>
			<input
				type="text"
				placeholder="buscador"
				value={counter}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
		<h1> Resultados del custoom Hook </h1>
		<ol>
			{
			data?.map(
			(item, index) =>
			{
			return <li key={index}>{item.quote}</li>
			}
			)
			}
		</ol>
		<h2> isLoading: {isLoading} </h2>
		<h2> hasError: {hasError} </h2>
	</>
	);
}
	//correccion Jonathan
	//llamar asi es llamarlo como componente, no como hooks
	//un hook luce asi 
	//const [counter, setCounter] = useState(value);
	//<useFetch url={counter} />

	//porp types, vamos a poner un por defecto
	//porque quizas no nos envien en index el componente
	//<FirstApp value = {0}/> forma de enviar prop
	//recordemos que se ponen abajo para modificar el componente
	//si lo ponemos antes no existe el componente
	FirstApp.propTypes = {
		title: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired
	}

	FirstApp.defaultProps = {
		title: "Reto numero Boton API",
		value: 0
	}

export default FirstApp;