import {  BUTTON_DEGREES } from '../constants';

const initialState = {
	isCelsius: true,
};
const environmentReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case BUTTON_DEGREES:
			const { newIsCelsius } = payload;
			return { ...state, isCelsius: newIsCelsius };
		default:
			return { state };
	}
};

export default environmentReducer;
