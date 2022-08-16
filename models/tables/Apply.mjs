import Sequelize from "sequelize";

export default class Apply extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedAt",
        tableName: "apply",
        modelName: "Apply",
        underscored: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Apply.belongsTo(db.Job, {
      foreignKey: "job_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });
    db.Apply.belongsTo(db.User, {
      foreignKey: "user_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });
  }
}
