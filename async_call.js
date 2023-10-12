// dependencia :request
//commonjs

const request= require('request')

//direccion de la API
const url='https://hp-api.onrender.com/api/characters'

// HACER OPERACION ASINCRONA 
let r=request(url,
                 {json:true},
                 (error,respuesta,body)=>{
                 let magia=body
                 magia.forEach(magic => {
                    console.log(magic.name)
                    console.log("-----------------")
                 });
                 
                 })