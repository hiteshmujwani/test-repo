import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/public/index.html")));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials (e.g., cookies)
    next();
});

// app.use(
//   cors({
//     origin: "https://new-ecom.vercel.app/",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     exposedHeaders: ["Content-Length"],
//     credentials: true,
//   })
// );

app.get("/", (req, res) => {
  res.send("hello from hitesh");
});

app.use("/api/v1", authRoute);

app.listen(5050, () => {
  console.log("server is running on port 5050");
});
