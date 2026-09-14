const express = require("express");
const { buildMessage } = require("./src/greeting");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.json(buildMessage()));

if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;