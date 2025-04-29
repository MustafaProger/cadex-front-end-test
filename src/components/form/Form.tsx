import React from "react";
import styled from "styled-components";
import FloatingField from "./FloatingField";

const Form = styled.form`
	width: 100%;
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

export type ContactFormProps = {
	values: {
		name: string;
		email: string;
		message: string;
	};
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onSubmit: (e: React.FormEvent) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({
	values,
	onChange,
	onSubmit,
}) => {
	return (
		<Form
			onSubmit={onSubmit}
			data-aos='fade-down'
			data-aos-duration='500'>
			<FloatingField
				label='Name'
				id='name'
				value={values.name}
				onChange={onChange}
				required
			/>
			<FloatingField
				label='Email'
				id='email'
				type='email'
				value={values.email}
				onChange={onChange}
				required
			/>
			<FloatingField
				label='Message'
				id='message'
				as='textarea'
				value={values.message}
				onChange={onChange}
				required
			/>
			<Button type='submit'>Send message</Button>
		</Form>
	);
};

export default ContactForm;
