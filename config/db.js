const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Intern_task_3", "postgres", "nigam123", {
  dialect: "postgres",
});
module.exports = sequelize;
