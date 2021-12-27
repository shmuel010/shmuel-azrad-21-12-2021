import React from 'react';
import { useNavigate } from 'react-router';
import {NavLinkWrapper, NavLinkWrapperChooser} from "./style";


const NavLink = ({ text, path }) => {
	console.log(location)
	console.log(location.pathname)
	const history = useNavigate();

	const onClickLink = () => {
		history(path);
	};

	return (<div>
		{window.location.pathname === path ?
			(<NavLinkWrapperChooser  onClick={() => onClickLink()}>
				{text}
			</NavLinkWrapperChooser>):
			(<NavLinkWrapper  onClick={() => onClickLink()}>
					{text}
			</NavLinkWrapper>)
		}



		</div>
	);
};

export default NavLink;
