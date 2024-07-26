import express from "express";
import { Request, Response, NextFunction } from "express-serve-static-core";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    res.send("Hello, World!");
});

// handle 404
app.use((_req: Request, res: Response) => {
    res.status(404).send("404 Not Found");
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
