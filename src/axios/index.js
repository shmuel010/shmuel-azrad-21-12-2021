import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const apikey = process.env.REACT_APP_WEATHER_API_KEY;

export const axiosWeatherCall = axios.create({
	baseURL,
	params: {
		apikey,
	},
});
