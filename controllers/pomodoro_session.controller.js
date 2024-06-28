const db = require('../models');
const PomodoroSession = db.PomodoroSession;

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await PomodoroSession.findAll();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const session = await PomodoroSession.findByPk(req.params.id);
    if (session) {
      res.status(200).json(session);
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSession = async (req, res) => {
  try {
    const newSession = await PomodoroSession.create(req.body);
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSession = async (req, res) => {
  try {
    const updatedSession = await PomodoroSession.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedSession[0]) {
      res.status(200).json({ message: 'Session updated successfully' });
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSession = async (req, res) => {
  try {
    const deletedSession = await PomodoroSession.destroy({
      where: { id: req.params.id }
    });
    if (deletedSession) {
      res.status(200).json({ message: 'Session deleted successfully' });
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
