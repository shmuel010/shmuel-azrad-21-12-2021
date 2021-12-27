import React from 'react';
import { useSelector } from 'react-redux';
import WeatherDailyCard from '../../components/WeatherDailyCard';
import {FavList, FavoriteWrapper} from "./style";

const FavoritesPage = () => {
	const { favoriteWeathers } = useSelector((state) => state.weather);
	return (
		<FavoriteWrapper >
			<span >Favorites</span>
			<FavList >
				{favoriteWeathers.length ? (
					favoriteWeathers.map((weather) => (
						<WeatherDailyCard dailyForecast={weather} key={weather.key} isFavoritePageDisplay={true} />
					))
				) : (
					<p >There are not favorites locations</p>
				)}
			</FavList>
		</FavoriteWrapper>
	);
};

export default FavoritesPage;
