const fs = require("fs");
const path = require("path");

const JOB_FILE = path.join(__dirname, "./../data/jobOpen.json");

function readData() {
  return JSON.parse(fs.readFileSync(JOB_FILE, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(JOB_FILE, JSON.stringify(data, null, 2));
}

module.exports = {
  readData,
  writeData,
};
