import express from "express";
import cors from "cors";
import students from "./routes/student.js";

const PORT = process.env.PORT || 5050;
const app = express();
app.use("/student", students);

app.use(cors());
app.use(express.json());

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
