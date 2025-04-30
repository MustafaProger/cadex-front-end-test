import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Container,
	Typography,
	Button,
	CircularProgress,
} from "@mui/material";

const ThankYouPage: React.FC = () => {
	const navigate = useNavigate();
	const [responseData, setResponseData] = useState<any | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedData = sessionStorage.getItem("formResponse");
		if (storedData) {
			try {
				const data = JSON.parse(storedData);
				setResponseData(data);
			} catch (err) {
				console.error("Ошибка парсинга:", err);
			}
		}

		const timer = setTimeout(() => setLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!loading && !responseData) {
			navigate("/contact-us");
		}
	}, [loading, responseData, navigate]);

	return (
		<>
			{/* Заменил Helmet на обычный meta тег */}
			<head>
				<title>Thank You | CADEX</title>
				<meta
					name='robots'
					content='noindex'
				/>
			</head>

			<Box
				sx={{
					py: 10,
					minHeight: "calc(100vh - 200px)",
					display: "flex",
					alignItems: "center",
				}}>
				<Container maxWidth='md'>
					{loading ? (
						<Box
							sx={{ display: "flex", justifyContent: "center", height: 300 }}>
							<CircularProgress sx={{ color: "black" }} />
						</Box>
					) : responseData ? (
						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant='h4'
								component='h1'
								gutterBottom
								fontWeight={700}>
								Thank you!
							</Typography>
							<Typography
								variant='h6'
								color='text.secondary'>
								{responseData.message}
							</Typography>
							<Box sx={{ mt: 4 }}>
								<Button
									variant='contained'
									onClick={() => navigate("/")}
									sx={{
										backgroundColor: "black",
										color: "white",
										"&:hover": {
											backgroundColor: "gray",
										},
									}}>
									Back to Home
								</Button>
							</Box>
						</Box>
					) : null}
				</Container>
			</Box>
		</>
	);
};

export default ThankYouPage;
