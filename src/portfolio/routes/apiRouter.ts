import { Router } from "express";
import fs from "fs";
import path from "path";

const portfolioApiRouter = Router();

portfolioApiRouter.post("/api/contactform/submit", (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n\n`;

  // Path to save the file
  const filePath = path.join("submissions.txt");

  // Save data to the file
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error("Error saving the data:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "Data saved successfully" });
  });
});

export default portfolioApiRouter;
