import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from '../components/Navbar';
import FavoritesPage from '../pages/FavoritesPage';
import WeatherPage from '../pages/WeatherPage';

const AppRoutes = () => {
	return (
		<div >
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<WeatherPage/>} />
					<Route exact path="/favorites" element={<FavoritesPage/>} />
				</Routes>
			</Router>
		</div>
	);
};

export default AppRoutes;
