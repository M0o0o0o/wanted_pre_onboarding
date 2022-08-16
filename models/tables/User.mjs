import Sequelize from "sequelize";

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedAt",
        tableName: "user",
        modelName: "User",
        underscored: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasOne(db.Apply, {
      foreignKey: "user_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });
  }
}
