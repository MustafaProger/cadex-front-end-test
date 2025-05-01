import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const navigations = [
	{ to: "/", text: "Home" },
	{ to: "/contact-us", text: "Contact Us" },
];

const Header: React.FC = () => {
	return (
		<AppBar
			position='sticky'
			color='default'
			elevation={0}>
			<Toolbar
				sx={{
					maxWidth: "1200px",
					width: "100%",
					mx: "auto",
					justifyContent: "space-between",
				}}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='telegram'>
					<TwitterIcon />
				</IconButton>

				<Box
					display='flex'
					gap={2}>
					{navigations.map((item) => (
						<Button
							component={NavLink}
							to={item.to}
							end
							color='inherit'
							sx={{
								color: "grey",
								textTransform: "none",
								"&.active": {
									color: "black",
								},
							}}>
							{item.text}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
