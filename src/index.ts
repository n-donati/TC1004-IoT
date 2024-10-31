import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import testRoutes from "./routes/test";
import validateError from "./middlewares/validation-error";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

app.use(express.json());

app.use("/api/v1/student", studentRouter);

app.use("/error", testRoutes);

app.use(validateError);

app.use(unknownResource);

app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
