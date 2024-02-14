import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from hitesh");
});

app.use("/api/v1", authRoute);

app.listen(5050, () => {
  console.log("server is running on port 5050");
});
