const { readData, writeData } = require("../models/deptModel");

exports.getDept = (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    console.log("GET error:", err);
    res.status(500).send({ message: "Failed to read data" });
  }
};

exports.updateDept = (req, res) => {
  const id = parseInt(req.params.id);
  const { department, openJobs } = req.body;

  const data = readData();
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) return res.status(404).send("Item not found");

  data[index] = {
    ...data[index],
    department,
    openJobs,
  };

  writeData(data);
  res.json(data[index]);
};
