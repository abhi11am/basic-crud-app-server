const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataType) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      first_name: DataType.STRING,
      last_name: DataType.STRING,
      email: DataType.STRING,
      contact: DataType.STRING,
      password: DataType.STRING,
      gender: DataType.STRING,
      about: DataType.STRING,
      createdAt: DataType.DATE,
      updatedAt: DataType.DATE,
    },
    {
      sequelize,
      tableName: "users",
    }
  );

  return User;
};
