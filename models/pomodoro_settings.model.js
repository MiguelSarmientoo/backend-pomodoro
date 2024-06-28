const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PomodoroSetting = sequelize.define('PomodoroSetting', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    work_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    },
    short_break_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    long_break_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'pomodoro_settings',
    timestamps: true,
    underscored: true
  });

  return PomodoroSetting;
};
