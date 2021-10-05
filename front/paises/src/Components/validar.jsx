

export default function validate(input){
    let errors={}
    if(!input.name){
        errors.name='Poner nombre de actividad'
    }
    if(input.dificultad.length===0){
        errors.dificultad='Seleccionar dificultad'
    }
    if(!input.duracion){
        errors.duracion='Colocar duracion'
    }
    if(input.temporada.length===0){
        errors.temporada='Seleccionar temporada'
        return {
            ...errors,
            flag:true
        }
    }else{
        return {
            ...errors,
            flag:false
        }
    }
}