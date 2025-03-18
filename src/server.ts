import app from "./app";
import { Server } from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT: string | number = process.env.PORT || 3000;
const NODE_ENV: string = process.env.NODE_ENV || "development";


const server: Server = app.listen(PORT, () => {
	console.log(`Server is running in ${NODE_ENV} on port ${PORT}`);
});

export default server;