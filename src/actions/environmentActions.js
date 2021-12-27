import store from '../store';

import { BUTTON_DEGREES} from '../constants';

export const toggleDegrees = () => (dispatch) => {
	const { isCelsius } = store.getState().environment;
	const newIsCelsius = !isCelsius;
	dispatch({ type: BUTTON_DEGREES, payload: { newIsCelsius } });
};


