import React, { useState } from "react";
import {
	Button,
	CircularProgress,
	Box,
	Typography,
	Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/form/Form";
import { handleSubmit } from "../services/formService";

const ContactPage: React.FC = () => {
	const [fields, setFields] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [formSent, setFormSent] = useState(false);

	const navigate = useNavigate();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFields({ ...fields, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: React.FormEvent) => {
		setLoading(true);
		try {
			const message = await handleSubmit(e, fields);
			setResponseMessage(message);
			setFormSent(true);
			sessionStorage.setItem("formResponse", JSON.stringify({ message }));
			setFields({ name: "", email: "", message: "" });
			navigate("/thank-you");
		} catch (err) {
			alert("Ошибка при отправке");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box sx={{ width: "100%", background: "#f7f7f7", padding: "60px 0" }}>
			<Paper
				sx={{
					maxWidth: 600,
					margin: "0 auto",
					background: "#fff",
					borderRadius: 2,
					boxShadow: 3,
					padding: "40px 32px",
					textAlign: "center",
					"@media (max-width: 600px)": {
						padding: "40px 20px",
					},
				}}>
				<Typography
					variant='h4'
					component='h2'
					fontWeight={900}
					gutterBottom
					data-aos='fade-down'>
					Contact Twitter Team
				</Typography>
				<Typography
					variant='body1'
					color='text.secondary'
					paragraph
					data-aos='fade-down'
					data-aos-duration='400'>
					Have a question or feedback? Fill out the form below and our team will
					get back to you soon.
				</Typography>
				{loading ? (
					<CircularProgress sx={{ display: "block", margin: "20px auto" }} />
				) : formSent ? (
					<>
						<Typography
							variant='body1'
							color='success.main'
							paragraph>
							{responseMessage}
						</Typography>
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								setFormSent(false);
								setFields({ name: "", email: "", message: "" });
								setResponseMessage("");
							}}
							sx={{ marginTop: 2 }}>
							Fill Form Again
						</Button>
					</>
				) : (
					<ContactForm
						values={fields}
						onChange={handleChange}
						onSubmit={onSubmit}
					/>
				)}
			</Paper>
		</Box>
	);
};

export default ContactPage;
