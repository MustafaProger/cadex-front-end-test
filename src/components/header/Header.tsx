import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import twitterIcon from "../../assets/icon/twitter.svg";

const HeaderBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background-color: #f5f5f5;
	z-index: 999;
`;

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 50%;
	width: 1200px;
	max-width: 100%;
	transform: translateX(-50%);
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1000;
`;

const Nav = styled.nav`
	display: flex;
	gap: 20px;
	position: relative;
	z-index: 20;
`;

const NavLinkStyled = styled(NavLink)`
	color: grey;
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s ease;

	&.active {
		color: black;
	}

	&:hover {
		color: black;
	}
`;

const Icon = styled.div`
	position: relative;
	z-index: 20;
	img {
		width: 32px;
		height: 32px;
	}
`;

const Header: React.FC = () => {
	return (
		<>
			<HeaderBackground />
			<HeaderWrapper>
				<Icon>
					<img
						src={twitterIcon}
						alt='Twitter'
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
		</>
	);
};

export default Header;
