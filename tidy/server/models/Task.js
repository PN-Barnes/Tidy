// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Task extends Model {}

// Task.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     content: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     date: {
//       type: DataTypes.DATE,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'task',
//   }
// );

// module.exports = Task;
