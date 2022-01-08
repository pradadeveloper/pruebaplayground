//
let datosJason = {
    club :"Independiente", 
    barrio:"Avellaneda"
}

let datosConvertidos = JSON.stringify(datosJason)

console.log(datosConvertidos);

let datosConvertidosJson = JSON.parse(datosConvertidos)

console.log(datosConvertidosJson)


// Métodos de Strings-Funciones
"Me gusta javascript".length //retorna 19
"Hola Mundo".indexOf("Mundo") //retorna 5 si no encuentra entonces saca -1
"Me gusta JS".slice(3,8); //retorna "gusta"

//Ejemplo de length
let mensaje = "Gran dia para practicar Javascript";
console.log(mensaje.length)

//Ejemplo de indexOf
console.log(mensaje.indexOf("dia"))

//Ejemplo de slice
console.log("hola mundo bebe")