const { Sequelize } = require("sequelize");
const { connect } = require("../routes");

const sequelize = new Sequelize("postgress", "postgress", "123456789", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established with DB");
  } catch (err) {
    console.error("unable to connect to DB");
  }
};

module.exports = sequelize;
