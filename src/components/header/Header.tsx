import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Стили для Header
const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
	display: flex;
	gap: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 10px;
	}
`;

const NavLinkStyled = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s ease;

	&.active {
		color: #f39c12; /* Активная ссылка */
	}

	&:hover {
		color: #f39c12; /* Hover эффект */
	}
`;

const Logo = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: #fff;
`;

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Logo>MyLogo</Logo>
			<Nav>
				<NavLinkStyled
					to='/'
					end>
					Home
				</NavLinkStyled>
				<NavLinkStyled to='/contacts-us'>Contact Us</NavLinkStyled>
				<NavLinkStyled to='/data'>Data</NavLinkStyled>
			</Nav>
		</HeaderWrapper>
	);
};

export default Header;
