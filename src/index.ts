import express, { json } from "express";
import { Request, Response, NextFunction } from "express-serve-static-core";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    res.send("Hello, World!");
});

// 404 Not Found
app.use((_req: Request, res: Response) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
