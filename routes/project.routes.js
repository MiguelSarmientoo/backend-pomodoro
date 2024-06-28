// routes/project.routes.js

const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project.controller');

// Rutas para proyectos
router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);
router.post('/', ProjectController.createProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
