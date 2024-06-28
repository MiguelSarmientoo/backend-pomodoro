// controllers/project.controller.js

const db = require('../models');
const Project = db.Project;

// Obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proyectos' });
  }
};

// Obtener un proyecto por ID
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proyecto' });
  }
};

// Crear un nuevo proyecto
exports.createProject = async (req, res) => {
  const { name, description, user_id } = req.body;
  try {
    const newProject = await Project.create({ name, description, user_id });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
};

// Actualizar un proyecto
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, user_id } = req.body;
  try {
    const project = await Project.findByPk(id);
    if (project) {
      project.name = name;
      project.description = description;
      project.user_id = user_id;
      await project.save();
      res.json(project);
    } else {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proyecto' });
  }
};

// Eliminar un proyecto
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (project) {
      await project.destroy();
      res.json({ message: 'Proyecto eliminado' });
    } else {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
};
