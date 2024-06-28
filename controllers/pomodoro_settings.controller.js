const db = require('../models');
const PomodoroSetting = db.PomodoroSetting;

exports.getAllSettings = async (req, res) => {
  try {
    const settings = await PomodoroSetting.findAll();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSettingById = async (req, res) => {
  try {
    const setting = await PomodoroSetting.findByPk(req.params.id);
    if (setting) {
      res.status(200).json(setting);
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSetting = async (req, res) => {
  try {
    const newSetting = await PomodoroSetting.create(req.body);
    res.status(201).json(newSetting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSetting = async (req, res) => {
  try {
    const updatedSetting = await PomodoroSetting.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedSetting[0]) {
      res.status(200).json({ message: 'Setting updated successfully' });
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSetting = async (req, res) => {
  try {
    const deletedSetting = await PomodoroSetting.destroy({
      where: { id: req.params.id }
    });
    if (deletedSetting) {
      res.status(200).json({ message: 'Setting deleted successfully' });
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
