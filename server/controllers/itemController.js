const { readData, writeData } = require("../models/itemModel");

exports.getItems = (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (err) {
    res.status(500).send({ message: "Failed to read data" });
  }
};

exports.addItem = (req, res) => {
  try {
    const { position, department, qualifications, locations, status } =
      req.body;
    if (!position || !department || !qualifications || !locations) {
      return res.status(400).send("Missing fields");
    }

    const data = readData();
    const newItem = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      position,
      department,
      qualifications,
      locations,
      status,
    };

    data.push(newItem);
    writeData(data);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).send("Failed to save data");
  }
};

exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { position, department, qualifications, locations, status } = req.body;

  const data = readData();
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) return res.status(404).send("Item not found");

  data[index] = {
    ...data[index],
    position,
    department,
    qualifications,
    locations,
    status,
  };

  writeData(data);
  res.json(data[index]);
};

exports.deleteItem = (req, res) => {
  const id = parseInt(req, params.id);
  const data = readData();
  const filtered = data.filter((item) => item.id !== id);
  writeData(filtered);
  res.json({ success: true });
};
