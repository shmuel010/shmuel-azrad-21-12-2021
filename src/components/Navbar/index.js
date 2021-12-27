import React from 'react';
import NavLink from '../NavLink';
import {ImgSvg, NavbarContainer, Row, SpanTitle} from "./style";
import cloud from '../../assets/cloudSvg.svg';


const Navbar = () => {
	return (
		<NavbarContainer >

			<Row>
				<ImgSvg src={cloud} alt=""/>
				 <SpanTitle> Weather App Task</SpanTitle>
				<ImgSvg src={cloud} alt=""/>

			</Row>

			<Row>
				<NavLink text="Home" path="/"  />
				<NavLink text="Favorites" path="/favorites" />
			</Row>
		</NavbarContainer>
	);
};

export default Navbar;
