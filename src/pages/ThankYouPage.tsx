import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Container,
	Typography,
	Button,
	CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";

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

	const containerVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
	};

	return (
		<>
			<Box
				sx={{
					py: 10,
					minHeight: "calc(100vh - 175px)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center", 
					backgroundColor: "#f9f9f9",
				}}>
				<Container maxWidth='md'>
					{loading ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								height: 300,
							}}>
							<CircularProgress sx={{ color: "black" }} />
						</Box>
					) : responseData ? (
						<motion.div
							variants={containerVariants}
							initial='hidden'
							animate='visible'>
							<Box sx={{ textAlign: "center", padding: 4 }}>
								<motion.div variants={itemVariants}>
									<Typography
										variant='h4'
										component='h1'
										gutterBottom
										fontWeight={700}
										color='primary'>
										Thank You!
									</Typography>
								</motion.div>

								<motion.div variants={itemVariants}>
									<Typography
										variant='h6'
										color='text.secondary'
										sx={{ marginBottom: 3 }}>
										{responseData.message}
									</Typography>
								</motion.div>

								<Box sx={{ mt: 4 }}>
									<motion.div variants={itemVariants}>
										<Button
											variant='contained'
											onClick={() => navigate("/contact-us")}
											sx={{
												backgroundColor: "black",
												color: "white",
												width: "200px",
												borderRadius: "8px",
												transition: "background 0.3s",
												background: "black",
												"&:hover": { backgroundColor: "#1876D1" },
											}}>
											Back to Home
										</Button>
									</motion.div>
								</Box>
							</Box>
						</motion.div>
					) : null}
				</Container>
			</Box>
		</>
	);
};

export default ThankYouPage;
