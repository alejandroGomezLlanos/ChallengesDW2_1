export const TodoAdd = ({ onNewTodo }) = > {

	const onFormSubmit = (event) => {
		event.preventDefault()

		const newTodo = {
			id: new Date().getTime(),
			descripcion: "Hacer el proyecto"
			done: false
		}
	
	}

}