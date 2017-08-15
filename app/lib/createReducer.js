//thank you jon lebensold
//https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053

export default function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if(handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	}
}