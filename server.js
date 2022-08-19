const express = require("express");
const app = express();
const port = 6000;
// var add = require('date-fns/add')

const schedule = require("node-schedule");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const moment = require("moment");
// var CronJob = require('cron').CronJob;

// var cron = require('node-cron');

app.post("/", async (req, res) => {
  let body = req.body;
  schedule.scheduleJob(new Date(moment().add(20, "seconds")), function () {
    console.log(`task ran at ${new Date()}: ${body.name}`);
  });
  res.send("good");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
