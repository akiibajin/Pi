const initialState={
  countries:[],
  detail:{},
  activitys:[],
  filtered:[]
}

const reducer=(state=initialState,action)=>{
  if(action.type==='GENERAR-PAISES'){
    state.countries.length=0
      return{
          ...state,
          countries:state.countries.concat(action.payload),
          filtered:action.payload
      }
  }if(action.type==='GENERAR-CREAR-ACTIVIDADES'){
    return{
      ...state,
      activitys:state.activitys.concat(action.payload)
    }
  }
  if(action.type==='DETALLE'){
    return{
      ...state,
      detail:action.payload
    }
  }
  if(action.type==='ORDENARC'){
    return{
      ...state,
      filtered: state.countries.filter(e=>e.continent===action.payload)
    }
  }
  if(action.type==='ORDENARAZ'){  
    //console.log('llega: ',action.payload)
    if(action.payload==='desciende'){
      let order=[].concat(state.filtered.sort((a,b)=>{if(a.name<b.name)return -1;else if(a.name>b.name)return 1;else return 0}))
      state.filtered.length=0
      return {
        ...state,
        filtered:state.filtered.concat(order)
      }
    }else if(action.payload==='asciende'){
      let order=[].concat(state.filtered.sort((a,b)=>{if(a.name<b.name)return 1;else if(a.name>b.name)return -1;else return 0}))
      state.filtered.length=0
      return {
        ...state,
        filtered:state.filtered.concat(order)
      }
    }
  }
  if(action.type==='ORDERACTIVITY'){
    return{
      ...state,
      filtered:state.filtered.filter(e=>action.payload.includes(e.ID))
    }
  }
  if(action.type==='ORDERPOPULATION'){
    if(action.payload==='asciende'){
      const order=[].concat(state.filtered.sort((a,b)=>{if(a.population<b.population)return -1;else if(a.population>b.population)return 1;else return 0}))
      state.filtered.length=0 
       return {
         ...state,
         filtered: state.filtered.concat(order)
    }
    }else{
      const order=[].concat(state.filtered.sort((a,b)=>{if(a.population<b.population)return 1;else if(a.population>b.population)return -1;else return 0}))
      state.filtered.length=0 
       return {
         ...state,
         filtered: state.filtered.concat(order)
    }
    }
}
  if(action.type==='CLEAN'){
    state.filtered.length=0
    return{
      ...state,
      filtered:state.filtered.concat(state.countries)
    }
  }
  return state
}

export default reducer