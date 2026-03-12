import express from "express";
import cors from "cors";

import {
  api,
  docs,
} from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", api);
app.use("/api-docs", docs);
// app.use("/data", data);
// app.use("/docman", docman);
// app.use("/localsystem", localsystem);
// app.use("/registration", registration);
// app.use("/token", tokenRouter);
// app.use("/email", email);

app.use(errorHandler);

export default app;
