import express from "express";
import path from 'path';
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import router from "./router";
import { errorHandler, notFound } from "./middlewares/error";
const MONGO_URI = process.env.MONGO_URI

const app = express();
app.use(cors({
  credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler)

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/client/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI );
mongoose.connection.on("error", (error) => {
  console.error(error);
  console.log("MongoDB connection error:", error);
  process.exit();
});

app.use("/api", router());



