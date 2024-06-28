const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('scrum_pomodoro_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, DataTypes);
db.Project = require('./project.model')(sequelize, DataTypes);
db.Category = require('./category.model')(sequelize, DataTypes);
db.Task = require('./task.model')(sequelize, DataTypes);
db.PomodoroSetting = require('./pomodoro_settings.model')(sequelize, DataTypes);
db.PomodoroSession = require('./pomodoro_session.model')(sequelize, DataTypes);

module.exports = db;
