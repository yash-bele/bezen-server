const collection = require('../model/model');

const postData = async (req, res) => {
  try {
    const data = await collection.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await collection.findOne({ id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const patchData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await collection.findOneAndUpdate({ id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { postData, getData, patchData };
