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
	background-color: white;
	z-index: 999;
	/* border-bottom: 1px solid rgba(0,0,0,0.1); */
`;

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	max-width: 1200px;
	width: 100%;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1000;
	margin: 0 auto;
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
					<NavLinkStyled to='/'>Home</NavLinkStyled>
					<NavLinkStyled to='/contact-us' end>Contact Us</NavLinkStyled>
				</Nav>
			</HeaderWrapper>
		</>
	);
};

export default Header;
