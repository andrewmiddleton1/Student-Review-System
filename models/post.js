/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    type: {
      type: DataTypes.STRING,

    },

    time_date: {
      type: DataTypes.STRING,
    },

    global_assessment: {
      type: DataTypes.STRING,
    },

    prioritisation_decision_making: {
      type: DataTypes.STRING,
    },

    professionalism: {
      type: DataTypes.STRING,
    },

    scholarship_teaching: {
      type: DataTypes.STRING,
    },

    teamwork_collaboration: {
      type: DataTypes.STRING,
    },

    leadership_management: {
      type: DataTypes.STRING,
    },

    health_advocacy: {
      type: DataTypes.STRING,
    },

    communication: {
      type: DataTypes.STRING,
    },

    sick_calls: {
      type: DataTypes.STRING,
    },

    body: {
      type: DataTypes.TEXT,
      allowNull: false,

    }
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint

    Post.belongsTo(models.Author, {
      constraints: false,

    });
    // Post.belongsTo(models.Author) , {
    //   // foreignKey: {
    //   //   allowNull: false
    //   // }
    // });
    Post.belongsTo(models.Student, {
      constraints: false,

    });



    // Post.hasOne(models.Student, {
    //   onDelete: "cascade"
    // });
  };

  return Post;
};
