import React from 'react';
import loadingCloud from '../../assets/weathe.gif';
import {LoadingWrapper} from "./style";



const Loading = () => {
	return (
	<div>
		<LoadingWrapper>
			<img src={loadingCloud} alt="loading-err"  />
			<span >Loading...</span>
		</LoadingWrapper>
	</div>
	);
};

export default Loading;
