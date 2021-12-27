import a1 from '../assets/weather_img/a1.png';
import a2 from '../assets/weather_img/a2.png';
import a3 from '../assets/weather_img/a3.png';
import a4 from '../assets/weather_img/a4.png';
import a5 from '../assets/weather_img/a5.png';
import a6 from '../assets/weather_img/a6.png';
import a7 from '../assets/weather_img/a7.png';
import a8 from '../assets/weather_img/a8.png';
import a9 from '../assets/weather_img/a9.png';
import a10 from '../assets/weather_img/a10.png';
import a11 from '../assets/weather_img/a11.png';
import a12 from '../assets/weather_img/a12.png';
import a13 from '../assets/weather_img/a13.png';
import a14 from '../assets/weather_img/a14.png';
import a15 from '../assets/weather_img/a15.png';
import a16 from '../assets/weather_img/a16.png';
import a17 from '../assets/weather_img/a17.png';
import a18 from '../assets/weather_img/a18.png';
import a19 from '../assets/weather_img/a19.png';
import a20 from '../assets/weather_img/a20.png';
import a21 from '../assets/weather_img/a21.png';
import a22 from '../assets/weather_img/a22.png';
import a23 from '../assets/weather_img/a23.png';
import a24 from '../assets/weather_img/a24.png';

export const renderWeatherImg = (imgNumber) => {
	switch (imgNumber) {
		case 1:
		case 2:
			return <img src={a1} alt="weather-icon-err"  />;
		case 3:
		case 4:
			return <img src={a2} alt="weather-icon-err"  />;
		case 5:
		case 6:
			return <img src={a3} alt="weather-icon-err"  />;
		case 7:
		case 8:
			return <img src={a4} alt="weather-icon-err"  />;
		case 9:
		case 10:
			return <img src={a5} alt="weather-icon-err"  />;
		case 11:
		case 12:
			return <img src={a6} alt="weather-icon-err"  />;
		case 13:
		case 14:
			return <img src={a7} alt="weather-icon-err"  />;
		case 15:
		case 16:
			return <img src={a8} alt="weather-icon-err"  />;
		case 17:
		case 18:
			return <img src={a9} alt="weather-icon-err"  />;
		case 19:
		case 20:
			return <img src={a10} alt="weather-icon-err"  />;
		case 21:
		case 22:
			return <img src={a11} alt="weather-icon-err"  />;
		case 23:
		case 24:
			return <img src={a12} alt="weather-icon-err"  />;
		case 25:
		case 26:
			return <img src={a13} alt="weather-icon-err"  />;
		case 27:
		case 28:
			return <img src={a14} alt="weather-icon-err"  />;
		case 29:
		case 30:
			return <img src={a15} alt="weather-icon-err"  />;
		case 31:
		case 32:
			return <img src={a16} alt="weather-icon-err"  />;
		case 33:
		case 34:
			return <img src={a17} alt="weather-icon-err"  />;
		case 35:
		case 36:
			return <img src={a18} alt="weather-icon-err"  />;
		case 37:
		case 38:
			return <img src={a19} alt="weather-icon-err"  />;
		case 39:
		case 40:
			return <img src={a20} alt="weather-icon-err"  />;
		case 41:
		case 42:
			return <img src={a21} alt="weather-icon-err"  />;
		case 44:
		case 43:
			return <img src={a22} alt="weather-icon-err"  />;
		case 45:
		case 46:
			return <img src={a23} alt="weather-icon-err"  />;
		case 47:
		case 48:
			return <img src={a24} alt="weather-icon-err"  />;
		default:
			return <img src={a1} alt="weather-icon-err"  />;
	}
};
