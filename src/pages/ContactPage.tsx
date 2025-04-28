import React, { useState } from "react";
import styled, { css } from "styled-components";

const FieldWrapper = styled.div`
	position: relative;
	margin-bottom: 32px;
	text-align: left;
`;

const FloatingLabel = styled.label<{ active: boolean; color?: string }>`
	position: absolute;
	left: 0;
	top: 16px;
	font-size: 1.1rem;
	color: ${({ active, color }) => (active ? color || "black" : "grey")};
	pointer-events: none;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	${({ active, color }) =>
		active &&
		css`
			top: -10px;
			left: 0;
			font-size: 0.95rem;
			color: ${color || "black"};
			background: #fff;
			padding: 0 3px;
			font-weight: 500;
		`}
`;

const StyledInput = styled.input<{ active: boolean; color?: string }>`
	width: 100%;
	border: none;
	border-bottom: 2px solid
		${({ active, color }) => (active ? color || "black" : "grey")};
	background: transparent;
	font-size: 16px;
	padding: 16px 0 8px 0;
	color: #111;
	outline: none;
	transition: border-color 0.2s;

	&::placeholder {
		color: transparent;
	}
`;

const StyledTextarea = styled.textarea<{ active: boolean; color?: string }>`
	width: 100%;
	border: none;
	border-bottom: 2px solid
		${({ active, color }) => (active ? color || "black" : "grey")};
	background: transparent;
	font-size: 16px;
	padding: 16px 0 8px 0;
	color: #111;
	outline: none;
	resize: vertical;
	transition: border-color 0.2s;

	&::placeholder {
		color: transparent;
	}
`;

const Button = styled.button`
	background: #111;
	color: #fff;
	font-size: 1.1rem;
	font-weight: 700;
	border: 1px solid black;
	border-radius: 8px;
	padding: 12px 0;
	margin-top: 10px;
	cursor: pointer;
	width: 100%;
	transition: background 0.2s;

	&:hover {
		background: transparent;
		color: black;
	}
`;

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

type FloatingFieldProps = {
	label: string;
	id: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	type?: string;
	as?: "input" | "textarea";
	required?: boolean;
	color?: string;
};

const FloatingField: React.FC<FloatingFieldProps> = ({
	label,
	id,
	value,
	onChange,
	type = "text",
	as = "input",
	required = false,
	color,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const active = isFocused || value.length > 0;

	return (
		<FieldWrapper>
			{as === "textarea" ? (
				<StyledTextarea
					id={id}
					name={id}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={label}
					required={required}
					active={active}
					color={color}
				/>
			) : (
				<StyledInput
					id={id}
					name={id}
					type={type}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={label}
					required={required}
					active={active}
					color={color}
				/>
			)}
			<FloatingLabel
				htmlFor={id}
				active={active}
				color={color}>
				{label}
			</FloatingLabel>
		</FieldWrapper>
	);
};

const ContactPage: React.FC = () => {
	const [fields, setFields] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFields({ ...fields, [e.target.name]: e.target.value });
	};

	return (
		<Section>
			<Content>
				<Title>Contact Twitter Team</Title>
				<Description>
					Have a question or feedback? Fill out the form below and our team will
					get back to you soon.
				</Description>
				<form >
					<FloatingField
						label='Name'
						id='name'
						value={fields.name}
						onChange={handleChange}
						required
					/>
					<FloatingField
						label='Email'
						id='email'
						type='email'
						value={fields.email}
						onChange={handleChange}
						required
					/>
					<FloatingField
						label='Message'
						id='message'
						as='textarea'
						value={fields.message}
						onChange={handleChange}
						required
					/>
					<Button type='submit'>Send message</Button>
				</form>
			</Content>
		</Section>
	);
};

export default ContactPage;
