export const todoReducer = (initialState = [], action)=>{
	switch (action.type) {
		case "[TODO] ADD TODO":
			return [... initialState, action.payload]
		default:
			return initialState;
	}
}

const todoReducer = {}