import express, { Express, Request, Response } from "express";
import moderationRoutes from "./api/v1/routes/moderationRoutes";
import morgan from "morgan";
import dotenv from "dotenv";
import setupSwagger from "../config/swagger";

dotenv.config();

const app: Express = express();
app.use(express.json());

// Get log level from environment variables
const LOG_LEVEL = process.env.LOG_LEVEL || (process.env.NODE_ENV === "development" ? "dev" : "combined");

// Use morgan for logging
app.use(morgan(LOG_LEVEL));

/**
 * Mount moderation routes on /api/v1/moderation
 */
app.use("/api/v1/moderation", moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
	res.status(404).json({ message: "Endpoint not found" });
});

// Setup Swagger
setupSwagger(app);

export default app;
