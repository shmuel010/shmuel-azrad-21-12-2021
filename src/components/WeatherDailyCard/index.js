import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { getCurrentWeather, toggleFavoriteWeather, updateDailyWeather } from '../../actions/weatherActions';
import { renderDay} from '../../utils/renderDay';
import { renderWeatherImg } from '../../utils/renderWeatherImg';
import { renderDegree } from '../../utils/renderDegree';
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg';
import {DailyCardTitle, FavoriteWrapper, HeartIconWrapper, Temperature} from "./style";

const WeatherDailyCard = ({ dailyForecast, isFavoritePageDisplay = false }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isCelsius } = useSelector((state) => state.environment);
	const { isLoading } = useSelector((state) => state.weather);

	useEffect(() => {
		const currentDate = new Date();
		if (currentDate.getDay() !== new Date(dailyForecast.date).getDay() && isFavoritePageDisplay) {
			dispatch(updateDailyWeather(dailyForecast.key));
		}
	}, []);

	const onClickFavoriteCard = (e) => {
		if (e.target?.tagName !== 'path' && e.targe?.tagName !== 'svg') {
			if (isFavoritePageDisplay) {
				navigate('/');
				dispatch(getCurrentWeather(dailyForecast));
			}
		}
	};

	const onClickFavoriteIcon = () => {
		dispatch(toggleFavoriteWeather(dailyForecast));
	};


	return (
		<FavoriteWrapper  onClick={onClickFavoriteCard}>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{isFavoritePageDisplay && (
						<HeartIconWrapper >
							<HeartIcon  onClick={onClickFavoriteIcon} />
						</HeartIconWrapper>
					)}
					<DailyCardTitle >
						{isFavoritePageDisplay ? dailyForecast.cityName : renderDay(dailyForecast.date) }
					</DailyCardTitle>
					{renderWeatherImg(dailyForecast.weatherIconNumber)}
					{isFavoritePageDisplay ? (
						<Temperature >{renderDegree(dailyForecast.tempInCelsius, isCelsius)}</Temperature>
					) : (
						<Temperature >
							{renderDegree(dailyForecast.minimumTempInCelsius, isCelsius)} -{' '}
							{renderDegree(dailyForecast.maximumTempInCelsius, isCelsius)}
						</Temperature>
					)}
				</>
			)}
		</FavoriteWrapper>
	);
};

export default WeatherDailyCard;
