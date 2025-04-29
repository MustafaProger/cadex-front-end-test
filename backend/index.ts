import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Form data:", { name, email, message });
  res.json({ message: `Thank you for your interest, ${name}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});