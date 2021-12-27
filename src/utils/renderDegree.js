export const renderDegree = (degreeInCelsius, isCelsius) => {
	const degreeSign = '\u00B0';
	if (isCelsius) {
		return `${Math.floor(degreeInCelsius)+degreeSign} C`;
	} else {
		return `${Math.floor((degreeInCelsius * 1.8)  + 32)+degreeSign} F`;
	}
};
