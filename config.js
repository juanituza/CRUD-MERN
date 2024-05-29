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
}