import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import twitter from "../../assets/icon/twitter.svg";

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #f5f5f5;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Nav = styled.nav`
	display: flex;
	gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
	color: grey;
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s ease;

	&.active {
		color: black; /* Активная ссылка */
	}

	&:hover {
		color: black; /* Hover эффект */
	}
`;

const Icon = styled.div`

	img {
		width: 32px;
		height: 32px;
	}
`;

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Icon>
				<img
					src={twitter}
					alt=''
				/>
			</Icon>
			<Nav>
				<NavLinkStyled
					to='/'
					end>
					Home
				</NavLinkStyled>
				<NavLinkStyled to='/contacts-us'>Contact Us</NavLinkStyled>
			</Nav>
		</HeaderWrapper>
	);
};

export default Header;
