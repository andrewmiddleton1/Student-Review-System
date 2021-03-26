/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    // 

    // 

    first_name: {
      type: DataTypes.STRING,

    },
    last_name: {
      type: DataTypes.STRING,

    },
    phone: {
      type: DataTypes.STRING,

    },
    email_pers: {
      type: DataTypes.STRING,

    },
    email_work: {
      type: DataTypes.STRING,

    },
    training_phase: {
      type: DataTypes.STRING,

    },
    exam_stage: {
      type: DataTypes.STRING,

    },
    pediatrics_term: {
      type: DataTypes.STRING,

    },
    ICU_term: {
      type: DataTypes.STRING,

    },
    anesthetics_term: {
      type: DataTypes.STRING,

    },
    retrieval_term: {
      type: DataTypes.STRING,

    },
    associated_DEMT: {
      type: DataTypes.STRING,

    },
    improvement_area_1: {
      type: DataTypes.STRING,

    },
    improvement_area_2: {
      type: DataTypes.STRING,

    },
    improvement_area_3: {
      type: DataTypes.STRING,

    },
    photo_URL: {
      type: DataTypes.STRING,

    },
  });

  Student.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // Student.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });

    // Student.belongsTo(models.Post, {
    //   constraints: false,
    //   onDelete: "cascade"
    // });

    // Student.hasMany(models.Post);

    // Student.belongsToMany(models.Post, {

    //   onDelete: "cascade"
    // });

    Student.belongsTo(models.Post, {
      constraints: false,
      // through: models.Post,
      onDelete: "cascade"
    });
  };

  return Student;
};
