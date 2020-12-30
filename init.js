import "./db"
import app from "./app";

const PORT = 3000;

const handleListening = () => {
    console.log(`✅ Listening ${PORT} port`);
}

app.listen(PORT, handleListening);