import React from 'react';
import {ErrorsWrapper} from "./style";


const PopupErrors = ({ text, onClickOk }) => {
	const onClickOkBtn = () => {
		onClickOk();
	};

	return (
		<ErrorsWrapper >
				<h1 >Warning</h1>
				<p >{text}, please try again latter</p>
				<button  onClick={onClickOkBtn} >
					OK
				</button>
		</ErrorsWrapper>
	);
};
export default PopupErrors;
