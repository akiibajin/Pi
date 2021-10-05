const {DataTypes}=require('sequelize')

module.exports=sequelize=>{
    sequelize.define('Paises',{
        ID:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        flags:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        flag:{
            type:DataTypes.STRING,
        },
        continent:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        capital:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        subregion:{
            type: DataTypes.STRING
        },
        area:{
            type:DataTypes.FLOAT
        },
        population:{
            type:DataTypes.INTEGER
        }
    })
}