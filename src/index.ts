import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.ts";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});