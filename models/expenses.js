/* eslint-disable prettier/prettier */
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Expenses = sequelize.define("Expenses", {
        // The email cannot be null, and must be a proper email before creation
        mortgage_repayments: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true,
            }
        },
        rent: {
            type: DataTypes.STRING,

            validate: {
                isNumeric: true,
            }

        },
        council_rates: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        land_tax: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        electricity_utilities: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        investment_property_costs: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        telephone_internet: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },

        groceries: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        recreation_entertainment: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        clothing_personal_care: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        medical_health: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        transport: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        education: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        childcare: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        insurance: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        child_maintenance: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        other_Expenses: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
    });

    return Expenses;
};
