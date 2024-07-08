import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("Uploads directory created.");
} else {
  console.log("Uploads directory already exists.");
}
