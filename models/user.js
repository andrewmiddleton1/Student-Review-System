// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,

      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,

    },
    first_name: {
      type: DataTypes.STRING,

    },
    last_name: {
      type: DataTypes.STRING,

    },
    salutation: {
      type: DataTypes.STRING,

    },
    preferredName: {
      type: DataTypes.STRING,

    },
    date_of_birth: {
      type: DataTypes.DATEONLY,

    },
    sex: {
      type: DataTypes.STRING,

    },
    marital_status: {
      type: DataTypes.STRING,

    },
    tax_resident: {
      type: DataTypes.BOOLEAN,

    },
    citizen: {
      type: DataTypes.BOOLEAN,

    },
    country_of_origin: {
      type: DataTypes.STRING,

    },
    preservation_age: {
      type: DataTypes.INTEGER,

    },
    age_pension_age: {
      type: DataTypes.INTEGER,

    },
    address: {
      type: DataTypes.STRING,

    },
    mobile: {
      type: DataTypes.INTEGER,

    },
    home_phone: {
      type: DataTypes.INTEGER,

    },
    work_phone: {
      type: DataTypes.INTEGER,

    },

  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  User.sync();
  return User;
};
