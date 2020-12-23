import express from "express";
const app = express();

const PORT = 3000;

const handleHome = (req, res) => {
    res.send("Hello from wow");
}

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.get("/", handleHome);

app.listen(PORT, handleListening);