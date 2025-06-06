import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/video", videoRouter);
app.use("/api/v1/likes", likesRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/tweets", tweetsRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/comment", commentRouter);

export { app };
