// server.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/user.routes');
const projectRoutes = require('./routes/project.routes');
const categoryRoutes = require('./routes/category.routes');
const taskRoutes = require('./routes/task.routes');
const pomodoroSettingRoutes = require('./routes/pomodoro_settings.routes');
const pomodoroSessionRoutes = require('./routes/pomodoro_session.routes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/pomodoro-settings', pomodoroSettingRoutes);
app.use('/api/pomodoro-sessions', pomodoroSessionRoutes);

// Test DB connection and sync
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return db.sequelize.sync();
  })
  .then(() => {
    console.log('Database synchronized...');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
