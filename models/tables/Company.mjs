import Sequelize from "sequelize";

export default class Company extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
        },
        nation: {
          type: Sequelize.STRING(30),
        },
        region: {
          type: Sequelize.STRING(30),
        },
        gen: {
          type: Sequelize.STRING(30),
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedAt",
        tableName: "company",
        modelName: "Company",
        underscored: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Company.hasOne(db.Job, {
      foreignKey: "company_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });
  }
}
