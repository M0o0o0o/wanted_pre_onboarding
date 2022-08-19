import Sequelize from "sequelize";

export default class Job extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        duty: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        overview: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        preferr: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        grant: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedAt",
        tableName: "job",
        modelName: "Job",
        underscored: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Job.belongsTo(db.Company, {
      foreignKey: "company_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });

    db.Job.hasOne(db.Apply, {
      foreignKey: "job_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });
  }
}
