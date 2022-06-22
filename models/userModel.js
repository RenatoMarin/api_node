module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return User
}