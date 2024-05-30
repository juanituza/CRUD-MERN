import dotenv from "dotenv";
import { Command } from "commander";

const program = new Command();
// program.option("-m, --mode <mode>", "Modo de ejecución", "prod");
// program.parse();

dotenv.config({ path: "./.env" });


export default {
  mongo: {
    URL: process.env.MONGO_URL || "localhost:27017",
  },
  frontend_url: {
    URL: process.env.FRONTEND_URL || "http://localhost:5173",
  },
  backend_url: {
    URL: process.env.BACKEND_URL || "http://localhost:3000",
  },
};