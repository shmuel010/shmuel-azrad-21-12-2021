import React from 'react';
import { useNavigate } from 'react-router';
import {NavLinkWrapper, NavLinkWrapperChooser} from "./style";


const NavLink = ({ text, path }) => {
	const history = useNavigate();

	const onClickLink = () => {
		history(path);
	};

	return (<div>
		{location.pathname === path ?
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
