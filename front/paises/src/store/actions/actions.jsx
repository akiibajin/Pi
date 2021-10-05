

export const Generar=(name)=>{
    return  function(dispacth){
            if(name&&name.length!==0){
                return fetch(`http://localhost:3000/countries?name=${name}`)
                .then(resul=>resul.json())
                .then(respuesta=>{
                    dispacth({type:'GENERAR-PAISES',payload:respuesta})
                })
                .catch(e=>console.log(e))   
            }
            else{
                return fetch('http://localhost:3000/countries')
                .then(resul=>resul.json())
                .then(respuesta=>{
                    dispacth({type:'GENERAR-PAISES',payload:respuesta})
                })
                .catch(e=>console.log(e))
            }

}
}
export const funcPost=(inputs)=>{
    return function(dispacth){
        return fetch('http://localhost:3000/activity',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(inputs)})
                .then(resul=>resul.json())
                .then(respuesta=>{
                    dispacth({type:'GENERAR-CREAR-ACTIVIDADES',payload:respuesta.activity})
                })   
    }
}
export const funcDetail=(ID)=>{
    return function(dispatch){
        return fetch(`http://localhost:3000/countries/${ID}`)
            .then(resul=>resul.json())
            .then(respuesta=>{
                //console.log("aca la respuesta: ",respuesta)
                dispatch({type:'DETALLE',payload:respuesta})
            })
    }
}
export const OrdenarContinente=(payload)=>{
    return{
        type:'ORDENARC',
        payload
    }
}
export const OrdenarAZ=(payload)=>{
    return{
        type:'ORDENARAZ',
        payload
    }
}
export const OrdenarActivity=()=>{
    return function(dispacth){
        return fetch('http://localhost:3000/details')
            .then(r=>r.json())
            .then(resul=>{
                let obj=[]
                resul.forEach(e=>obj.push(e.PaiseID))
                return obj
            })
            .then(respuesta=>{console.log('respuesta: ',respuesta);return dispacth({type:'ORDERACTIVITY',payload:respuesta})})
            .catch(e=>console.log(e))
    }
}
export const OrdenarPoblacion=(payload)=>{
    return {
        type:'ORDERPOPULATION',
        payload 
    }
} 

export const Clean=()=>{
    return{
        type:'CLEAN'
    }
}