module.exports = {
  appPort: process.env.PORT || 5000,
  db: {
    database: 'scrum_pomodoro_app',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  },
};
