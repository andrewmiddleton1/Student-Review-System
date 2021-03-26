/* eslint-disable prettier/prettier */
var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
      allowNull: false

    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    // 
    password: {
      type: DataTypes.STRING,
      allowNull: false

    },
    first_name: {
      type: DataTypes.STRING,

    },
    last_name: {
      type: DataTypes.STRING,

    },
  });

  Author.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // Author.hasMany(models.Post, {
    //   onDelete: "cascade"
    // });
    // Author.hasMany(models.Post, {
    //   constraints: false,
    //   onDelete: "cascade"


    // });





    Author.hasMany(models.Post, {
      constraints: false,

      onDelete: "cascade"
    });


  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Author.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Author.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  Author.addHook("beforeUpdate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  Author.sync();
  return Author;



};
