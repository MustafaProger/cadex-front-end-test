type Fields = { name: string; email: string; message: string };

export async function handleSubmit(e: React.FormEvent, fields: Fields) {
	e.preventDefault();

	try {
		const response = await fetch("http://localhost:3001/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: fields.name,
				email: fields.email,
				message: fields.message,
			}),
		});

		const data = await response.json();
		console.log(data.message);
	} catch (error) {
		console.error("Ошибка при отправке:", error);
	}
}
