const express = require("express");
const bodyParser = require("body-parser");

const gastosRouter = require("./routes/gastos");
const TypeRouter = require("./routes/type");

const app = express();
app.use(bodyParser.json());

app.use("/api/gastos", gastosRouter);
app.use("/api/type", TypeRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});
