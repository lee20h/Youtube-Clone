import "./db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
  console.log(`✅ Listening ${PORT} port`);
};

app.listen(PORT, handleListening);
