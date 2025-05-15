const fs = require("fs");
const path = require("path");

const DEPARTMENT_FILE = path.join(
  __dirname,
  "./../data/jobDepartmentOpen.json"
);

function readData() {
  return JSON.parse(fs.readFileSync(DEPARTMENT_FILE, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(DEPARTMENT_FILE, JSON.stringify(data, null, 2));
}

module.exports = {
  readData,
  writeData,
};
