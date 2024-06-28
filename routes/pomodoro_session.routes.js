const express = require('express');
const router = express.Router();
const pomodoroSessionController = require('../controllers/pomodoro_session.controller');

router.get('/', pomodoroSessionController.getAllSessions);
router.get('/:id', pomodoroSessionController.getSessionById);
router.post('/', pomodoroSessionController.createSession);
router.put('/:id', pomodoroSessionController.updateSession);
router.delete('/:id', pomodoroSessionController.deleteSession);

module.exports = router;
