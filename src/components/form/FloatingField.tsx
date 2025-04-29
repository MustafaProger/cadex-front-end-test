import React, { useState } from "react";
import styled, { css } from "styled-components";

const FieldWrapper = styled.div`
	position: relative;
	margin-bottom: 32px;
	text-align: left;
`;

const FloatingLabel = styled.label<{ $active: boolean; $color?: string }>`
	position: absolute;
	left: 16px;
	top: 16px;
	font-size: 1.1rem;
	color: ${({ $active, $color }) => ($active ? $color || "black" : "grey")};
	pointer-events: none;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	${({ $active, $color }) =>
		$active &&
		css`
			top: -10px;
			left: 12px;
			font-size: 0.95rem;
			color: ${$color || "black"};
			background: #fff;
			padding: 0 3px;
			font-weight: 500;
		`}
`;

const StyledInput = styled.input<{ $active: boolean; $color?: string }>`
	width: 100%;
	border: 2px solid
		${({ $active, $color }) => ($active ? $color || "black" : "grey")};
	background: transparent;
	font-size: 16px;
	padding: 16px;
	color: #111;
	outline: none;
	transition: border-color 0.2s;
	border-radius: 8px;

	&::placeholder {
		color: transparent;
	}
`;

const StyledTextarea = styled.textarea<{ $active: boolean; $color?: string }>`
	width: 100%;
	border: 2px solid
		${({ $active, $color }) => ($active ? $color || "black" : "grey")};
	background: transparent;
	font-size: 16px;
	padding: 16px;
	color: #111;
	outline: none;
	resize: vertical;
	transition: border-color 0.2s;
	border-radius: 8px;
	min-height: 120px;

	&::placeholder {
		color: transparent;
	}
`;

export type FloatingFieldProps = {
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
					$active={active}
					$color={color}
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
					$active={active}
					$color={color}
				/>
			)}
			<FloatingLabel
				htmlFor={id}
				$active={active}
				$color={color}>
				{label}
			</FloatingLabel>
		</FieldWrapper>
	);
};

export default FloatingField;
