import React from "react";
import { TextField, Button, Box } from "@mui/material";

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
		<Box
			component='form'
			onSubmit={onSubmit}
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 1,
				"& .MuiTextField-root": { marginBottom: 2 },
			}}
			data-aos='fade-down'
			data-aos-duration='500'>
			<TextField
				label='Name'
				id='name'
				name='name'
				value={values.name}
				onChange={onChange}
				required
				fullWidth
				variant='outlined'
			/>
			<TextField
				label='Email'
				id='email'
				name='email'
				type='email'
				value={values.email}
				onChange={onChange}
				required
				fullWidth
				variant='outlined'
			/>
			<TextField
				label='Message'
				id='message'
				name='message'
				value={values.message}
				onChange={onChange}
				required
				fullWidth
				multiline
				rows={4}
				variant='outlined'
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				sx={{
					padding: "12px 0",
					fontSize: "1.1rem",
					fontWeight: 700,
					borderRadius: "8px",
					cursor: "pointer",
					transition: "background 0.3s",
					background: "black",
					"&:hover": { backgroundColor: "#1876D1" },
				}}>
				Send message
			</Button>
		</Box>
	);
};

export default ContactForm;
