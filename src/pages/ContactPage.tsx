import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "../components/form/Form";
import { handleSubmit } from "../services/formService";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
	width: 100%;
	background: #f7f7f7;
	padding: 60px 0;
`;

const Content = styled.div`
	max-width: 600px;
	margin: 0 auto;
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	padding: 40px 32px;
	text-align: center;

	@media (max-width: 600px) {
		margin: 0 20px;
		padding: 40px 20px;
	}
`;

const Title = styled.h2`
	font-size: 2.2rem;
	font-weight: 900;
	margin-bottom: 18px;
	color: #111;
`;

const Description = styled.p`
	color: #444;
	font-size: 1.1rem;
	margin-bottom: 32px;
`;

const ContactPage: React.FC = () => {
	const [fields, setFields] = useState({
		name: "ыфвафыв",
		email: "sadfads@sdfdsf",
		message: "asdfasdfasdfasdfsda",
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
			navigate("/thank-you");
		} catch (err) {
			alert("Ошибка при отправке");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Section>
			<Content>
				<Title data-aos='fade-down'>Contact Twitter Team</Title>
				<Description
					data-aos='fade-down'
					data-aos-duration='400'>
					Have a question or feedback? Fill out the form below and our team will
					get back to you soon.
				</Description>
				{loading ? (
					<p>Отправка данных...</p>
				) : formSent ? (
					<>
						<p>{responseMessage}</p>
						<button
							onClick={() => {
								setFormSent(false);
								setFields({ name: "", email: "", message: "" });
								setResponseMessage("");
							}}>
							Заполнить снова
						</button>
					</>
				) : (
					<ContactForm
						values={fields}
						onChange={handleChange}
						onSubmit={onSubmit}
					/>
				)}
			</Content>
		</Section>
	);
};

export default ContactPage;
