const express = require("express");
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${base}/login.html`);
});

app.get("/register", (req, res) => {
  res.sendFile(`${base}/register-device.html`);
});

app.get("/main", (req, res) => {
  res.sendFile(`${base}/main.html`);
});

app.get("/main1", (req, res) => {
  res.sendFile(`${base}/main1.html`);
});

app.get("/temp", (req, res) => {
  res.sendFile(`${base}/temp.html`);
});

app.get("/Light", (req, res) => {
  res.sendFile(`${base}/light.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
