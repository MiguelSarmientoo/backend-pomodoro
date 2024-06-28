const express = require('express');
const router = express.Router();
const pomodoroSettingController = require('../controllers/pomodoro_settings.controller');

router.get('/', pomodoroSettingController.getAllSettings);
router.get('/:id', pomodoroSettingController.getSettingById);
router.post('/', pomodoroSettingController.createSetting);
router.put('/:id', pomodoroSettingController.updateSetting);
router.delete('/:id', pomodoroSettingController.deleteSetting);

module.exports = router;
