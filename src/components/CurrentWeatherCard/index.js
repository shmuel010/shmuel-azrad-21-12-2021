import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherDailyCard from '../WeatherDailyCard';
import { toggleFavoriteWeather } from '../../actions/weatherActions';
import { renderDay } from '../../utils/renderDay';
import { renderDegree } from '../../utils/renderDegree';
import { renderWeatherImg } from '../../utils/renderWeatherImg';
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg';
import {
	CityName, DailyForecasts,
	CurrentWeatherCardWrapper,
	CurrentWeatherInfo,
	CurrentWeatherRow,
	HeartWrapperIcon,
	IconWrapper, HeartWrapperIconFavorite, DayName
} from "./style";
import {StatusWeather, Temperature} from "../WeatherDailyCard/style";

const CurrentWeatherCard = () => {
	const dispatch = useDispatch();
	const { currentWeather, fiveDayWeather, favoriteWeathers } = useSelector((state) => state.weather);
	const { isCelsius } = useSelector((state) => state.environment);
	const [favoritesWeatherKeys, setFavoritesWeatherKeys] = useState([]);

	useEffect(() => {
		if (favoriteWeathers) {
			const newFavoritesWeatherKeys = favoriteWeathers.map((weather) => weather.key);
			setFavoritesWeatherKeys(newFavoritesWeatherKeys);
		}
	}, [favoriteWeathers]);

	const onClickFavoriteIcon = () => {
		dispatch(toggleFavoriteWeather(currentWeather));
	};
	return (
		<CurrentWeatherCardWrapper >
			<CurrentWeatherInfo >
				<CityName>{currentWeather.cityName}</CityName>
				<DayName>{renderDay(currentWeather.date) }</DayName>
				<Temperature >Temperature: {renderDegree(currentWeather.tempInCelsius, isCelsius)}</Temperature>
				<StatusWeather>Status : {currentWeather.weatherText}</StatusWeather>
			</CurrentWeatherInfo>
			{favoritesWeatherKeys.includes(currentWeather.key) ?
				(<HeartWrapperIconFavorite>
					<HeartIcon onClick={onClickFavoriteIcon}/>
				</HeartWrapperIconFavorite>):
				(<HeartWrapperIcon>
					<HeartIcon onClick={onClickFavoriteIcon}/>
				</HeartWrapperIcon>
				)}
			<CurrentWeatherRow >
				<IconWrapper >{renderWeatherImg(currentWeather.weatherIconNumber)}</IconWrapper>
			</CurrentWeatherRow>
			<DailyForecasts >
				{fiveDayWeather.map(
					(dailyForecast, index) => index !== 0 && <WeatherDailyCard dailyForecast={dailyForecast} key={index} />
				)}
			</DailyForecasts>
		</CurrentWeatherCardWrapper>
	);
};

export default CurrentWeatherCard;
