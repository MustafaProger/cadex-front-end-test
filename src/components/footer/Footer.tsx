import React from "react";
import styled from "styled-components";
import { ShieldCheck, FileText, LifeBuoy } from "lucide-react";

const FooterWrapper = styled.footer`
	width: 100%;
	background: #2c2c2c;
	padding: 20px 0 24px 0;
`;

const FooterContent = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 50px;
	flex-wrap: wrap;

	@media (max-width: 700px) {
		flex-direction: column;
		gap: 16px;
		text-align: center;
		padding: 0 16px;
	}
`;

const FooterLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const CompanyName = styled.span`
	font-weight: bold;
	font-size: 1.1rem;
	color: #ccc;
`;

const FooterLinks = styled.nav`
	display: flex;
	gap: 24px;

	@media (max-width: 700px) {
		justify-content: center;
		width: 100%;
		gap: 16px;
	}
`;

const FooterLink = styled.a`
	color: grey;
	text-decoration: none;
	font-size: 1rem;
	display: flex;
	align-items: center;
	gap: 6px;
	transition: color 0.2s;

	svg {
		width: 18px;
		height: 18px;
	}

	&:hover {
		color: white;
	}
`;

const Copyright = styled.div`
	color: #888;
	font-size: 0.95rem;
	margin-top: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer: React.FC = () => (
	<FooterWrapper>
		<FooterContent>
			<FooterLeft>
				<CompanyName>Twitter</CompanyName>
			</FooterLeft>
			<FooterLinks>
				<FooterLink href='#'>
					<ShieldCheck /> Privacy
				</FooterLink>
				<FooterLink href='#'>
					<FileText /> Terms
				</FooterLink>
				<FooterLink href='#'>
					<LifeBuoy /> Support
				</FooterLink>
			</FooterLinks>
		</FooterContent>
		<Copyright>
			&copy; {new Date().getFullYear()} Twitter. All rights reserved.
		</Copyright>
	</FooterWrapper>
);

export default Footer;
