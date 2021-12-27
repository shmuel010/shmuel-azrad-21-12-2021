import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWeatherCall } from '../../axios';

import { getCurrentWeather, getUserWeatherLocation, setErr } from '../../actions/weatherActions';

import CurrentWeatherCard from '../../components/CurrentWeatherCard';
import Loading from '../../components/Loading';
import PopupErrors from '../../components/ErrorPopup';

import { START_LOADING } from '../../constants';

import { ReactComponent as Search } from '../../assets/search.svg';

import {SearchErrors, SearchIcon, SearchInput, Suggestion, SuggestionsWrapper, WeatherWrapper} from "./style";

const WeatherPage = () => {
	const dispatch = useDispatch();

	const { currentWeather, isLoading, err } = useSelector((state) => state.weather);
	const [searchInput, setSearchInput] = useState('');
	const [cities, setCities] = useState([]);
	const [popupDetails, setPopupDetails] = useState(null);
	const [searchErr, setSearchErr] = useState('');

	useEffect(() => {
		if (err) {
			setPopupDetails({ onClickOk: onClickPopupOkBtn, text: err });
		}
	}, [err]);

	useEffect(() => {
		if (searchErr) {
			setTimeout(() => {
				setSearchErr('');
			}, 1500);
		}
	}, [searchErr]);

	useEffect(() => {
		if (!currentWeather) {
			dispatch({ type: START_LOADING });
			navigator.geolocation.getCurrentPosition(
				function (position) {
					dispatch(getUserWeatherLocation(position));
				},
				function (error) {
					if (error.code === error.PERMISSION_DENIED) {
						const defaultTelAvivObj = {
							Key: '215854',
							LocalizedName: 'Tel Aviv',
							Country: 'Israel',
						};
						dispatch(getCurrentWeather(defaultTelAvivObj));
					}
				}
			);
		}
	}, []);

	useEffect(() => {
		if (searchInput.trim()) {
			const timer = setTimeout(async () => {
				await autoComplete();
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [searchInput]);

	const autoComplete = async () => {
		try {
			const res = await axiosWeatherCall('/locations/v1/cities/autocomplete', { params: { q: searchInput } });
			if (res.status === 200 && res?.data) {
				setCities(res.data);
			}
		} catch (err) {
			dispatch(setErr(err.message));
			console.log(`autoComplete Err: ${err.message}`);
		}
	};

	const renderSuggestions = () => {
		return cities.map(
			(city, index) =>
				searchInput &&
				city.LocalizedName.toLocaleLowerCase().includes(searchInput) && (
					<Suggestion key={index}  onClick={() => onClickSuggestion(city)}>
						{city.LocalizedName}
					</Suggestion>
				)
		);
	};

	const onClickSuggestion = (city) => {
		dispatch(getCurrentWeather(city));
		setCities([]);
		setSearchInput(city.LocalizedName);
	};

	const onChangeSearchInput = (e) => {
		const { value } = e.target;
		// Only en letters
		const isValid = /^[a-zA-Z\s]+$/.test(value);
		if (!isValid && !searchInput) {
			setSearchErr('Only en letters allowed');
		} else {
			const newValue = value.replace(/[^A-Za-z\s]/gi, '').toLocaleLowerCase();
			setSearchInput(newValue);
		}
	};

	const onClickPopupOkBtn = () => {
		setPopupDetails(null);
		dispatch(setErr(''));
	};

	return (
		<WeatherWrapper >
			{popupDetails ? <PopupErrors text={popupDetails.text} onClickOk={onClickPopupOkBtn} /> :
			isLoading ? (
				<Loading />
			) : (
				<>
					{searchErr ? <SearchErrors>{searchErr}</SearchErrors> : ''}
					<SearchInput>
						<input
						value={searchInput}
						type="text"
						placeholder="Enter a city..."
						onChange={onChangeSearchInput}/>
						<SearchIcon>
							<Search />
						</SearchIcon>
					</SearchInput>

					<SuggestionsWrapper>{renderSuggestions()}</SuggestionsWrapper>
					{currentWeather ? <CurrentWeatherCard /> : ''}
				</>
			)}
		</WeatherWrapper>
	);
};

export default WeatherPage;
