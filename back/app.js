import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createTables } from "./temp.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

createTables();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/catalog", bookRoutes);
app.use("/api/v1/inventory", bookRoutes);

export default app;
