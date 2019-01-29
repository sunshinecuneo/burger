module.exports = function(sequelize, DataTypes ) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    // This line gives the Burger to the brain!!
    return Burger;
}