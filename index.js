import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

const PORT = 3000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
    res.send("Hello from wow");
};


const handleProfile = (req, res) => {
    res.send("Your are on my Profile");
};

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);