//segundo challenge
import {useState} from "react";
import PropTypes from "prop-types"

const FirstApp = ({title, value}) => {
	
	//use state
	const [counter, setCounter] = useState(value);

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

	return(
	<>
		<h1> {title} </h1>
		<h1> {counter} </h1>
		<span> Botones </span>
		<button onClick={ () => handleAdd() } > Sumar 1 </button>
		<button onClick={ () => handleSubstract() } > Restar 1 </button>
		<button onClick={ () => handleReset() } > Reset </button>
	</>
	);
}

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
		title: "Reto numero 2",
		value: 0
	}

export default FirstApp;