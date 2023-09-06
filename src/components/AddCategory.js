import {useState} from "react";

const AddCategory = ({onAddCategory}) => {

	//use state
	const [inputValue, setInputValue] = useState("...")

	//cambiar valor con cambio en texto
	const onInputChange = (evt) => {
		setInputValue(evt.target.value);
	}

	//agrega categoria y limpia el campo de texto
	const onSubmit = (evt) => {
		evt.preventDefault();
		onAddCategory(inputValue);
		setInputValue("");
	}

	return (
		<form onSubmit={(event => onSubmit(event))}>
			<input
				type="text"
				placeholder="buscador"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
	);
}
export default AddCategory;