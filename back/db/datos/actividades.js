const {DataTypes}=require('sequelize')

module.exports=sequelize=>{
    sequelize.define('Actividades',{
        name:{
            type: DataTypes.STRING,
        },
        dificultad:{
            type:DataTypes.ENUM("1","2","3","4","5"),
            allowNull:false
        },
        duracion:{
            type:DataTypes.STRING
        },
        temporada:{
            type:DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull:false
        }
    })
}