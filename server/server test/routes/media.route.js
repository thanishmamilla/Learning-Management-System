// routes/media.js
import express from "express";
import upload from "../utils/multer.js";
import path from "path";

const router = express.Router();

router.post("/upload-video", upload.single("file"), (req, res) => {
  try {
    console.log("hello")
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const fileUrl = `https://api.cybermatrix1337.in/uploads/${req.file.filename}`;
    

    res.status(200).json({
      success: true,
      message: "File uploaded successfully.",
      data: {
        url: fileUrl,
        public_id: req.file.filename
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

export default router;
