import express from "express";
import flashcardsRoutes from "./routes/flashcardsRoutes";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(express.json);
app.use("/api", flashcardsRoutes);
app.use(errorHandler);

export default app;
