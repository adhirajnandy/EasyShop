import fs from "fs";
import path from "path";

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("Uploads directory created.");
} else {
  console.log("Uploads directory already exists.");
}
