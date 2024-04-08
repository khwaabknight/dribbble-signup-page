import express, { Application, Request, Response } from "express";
import authRoutes from './routes/authRoutes';
import dotenv from "dotenv";
import cloudinaryConnect from './config/cloudinary';
import cors from 'cors';
import dbConnect from "./config/database";
import fileUpload from 'express-fileupload';
dotenv.config();

dbConnect();
cloudinaryConnect();

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin:'*'
}));
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Your server is up and running",
  });
});

// Auth Routes
app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});