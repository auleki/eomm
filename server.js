import dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));