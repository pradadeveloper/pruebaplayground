//Ejemplo de length
let mensaje = ("Gran dia para practicar Javascript");
console.log(mensaje.length)

//Ejemplo de indexOf
console.log(mensaje.indexOf("dia"))

//Ejemplo de Slice
console.log(mensaje.slice(0,24))

//Ejemplo trim
console.log(mensaje.trim())

//Ejemplo split
console.log(mensaje.split(" "))

//Ejemplo replace
console.log(mensaje.replace("Javascript","todo"))

//Ejercicio 1 concatenar con funciones.
function dominio (string){
    return ("http://www."+string)
}
console.log(dominio("digitalhouse.com.ar"))

//Ejercicio 2 usar Lenght
let texto = "Hola Mundo"
console.log(texto.length)

//Ejercicio 3 usando Replace
function reemplazoFastFast (string,palabra1,palabra2){
    return (string.replace(palabra1,palabra2))
}
console.log(reemplazoFastFast('Este texto es mala onda','mala','buena'))

//Ejercicio 4 usando Slice
let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11,16)
console.log(licenciada)

//Ejercicio 5 usando IndexOf
let texto = ('Existen muchos lenguajes de programación y JavaScript es uno de ellos')
let palabra = ('programación')

function menciona(texto,palabra){
    if ((texto.indexOf(palabra))!=-1){
    return true
}else{
    return false
}
}
console.log(menciona(texto,palabra))

//Objetos literales
let curso = {
    cantidadAlumnos : 38,
    docentes : ["Nacho","Javier"],
    horario : "de 19 a 21 horas."
}

//Ejercicio Funciones con If
function esPar(n){
    if(n%2==0){
    return true 
    }
    else
    {
    return false
    }
}
console.log(esPar(4))

//Ejemplo Programación orientada a objetos.
let curso = {
    cantidadAlumnos : 38,
    docentes : ["Nacho","Javier"],
    horario : "de 19 a 21 horas."
}
console.log(curso)

//Ejercicio funciones usando If % módulo
function esPar(n){
    if(n%2==0){
    return true 
    }
    else
    {
    return false
    }
}
console.log(esPar(4))

//Utilizar una función dentro de otras funciones
function anterior (n){
    return n-1
}
function triple(n){
    return n*3
}
function anteriorDelTriple(n){
    return anterior(triple(n))
}
console.log(anterior(5))
console.log(triple(5))
console.log(anteriorDelTriple(5))

//Arrays ejemplos
let nombres = ["Nacho","Darío","Javier"];
let edades = [34, 28, 37, 40, 43];
let valoresDeVerdad = [true,false,false];
let variados = ["Nacho",34,true,false,[34, 28, 37, 40, 43]];

//Un dato concreto dentro de un array

console.log(valoresDeVerdad[0]);

//Arrays dentro de un array

console.log(variados[4][1])

//Métodos de arrays (FUNCIONES DE ARRAYS)
let colores = ["azul","rojo","amarillo"]
colores.push("violeta","naranja") //agregar en el ultimo lugar
colores.pop("azul") //sacar el ultimo elemento
colorAzul.shift() //sacará del array el elemento en el indice "0"
coloresNuevos.unshift("blanco","negro") //inserta uno o más datos al principio.
colores.indexOf("rojo") //retorna la primera posición del indice, en caso de no encontrar retorna -1.
colores.lastIndexOf("rojo") //retorna la ultima posición del indice, en caso de no encontrar retorna -1.
coloresJuntos.join()//Devuelve el array unificado convertido en string separado por comas.
coloresJuntos.join(", ")//Devuelve el array unificado convertido en string separado por comas y un espacio.

//Ejemplo métodos de Arrays usando index.of
let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]
let indiceJuan = alumnos.indexOf("Juan")
let indiceFrancisco = alumnos.indexOf("Francisco")

//Ejemplo métodos de Arrays usando Join
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ")

//Ejemplo métodos de Arrays usando Pop
  let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  let alumnoEgresado = estudiantes.pop()

//Ejercicio Shift
  let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
    let alumnoDeBaja = estudiantes.shift()

//Ejercicios Unshift y shift

    let estudiantes = [
        {
          nombre: 'Alvaro',
          promedio : 9,
          curso : 'Android',
        },
        {
          nombre: 'Daniel',
          promedio : 6,
          curso : 'Full Stack',
        },
        {
          nombre: 'Alexis',
          promedio : 3,
          curso : 'iOS',
        }
      ]
    let mariana = 
      {
        nombre: "Mariana",
        promedio: 9,
        curso: "Full Stack"
      }
    let francisco=
    {
        nombre: "Francisco",
        promedio: 2,
        curso: "Android"
    }
    estudiantes.unshift(mariana)
    estudiantes.unshift(francisco)
    console.log(estudiantes)


//Función constructora y objetos Literales
    let curso = {
        cantidadDeAlumnos : 32,
        docentes : ["Nacho","Javier"],
        horario : "de 19 a 21 horas",
        notificaciones : function(){
            return "El horario de la cursada es de "+ this.horario;
        }
    }
    
    function Curso(cantidadDeAlumnos,docentes,horario){
        this.cantidadDeAlumnos = cantidadDeAlumnos;
        this.docentes = docentes;
        this.horario = horario;
    }
    
    let cursoDeProgramacion = new Curso(50,["Javier","Gerardo"],"de 19 a 21 hors.");
    let cursoDeMarketing = new Curso(45,["Diego","Debbie"],"de 16 a 20 hors.");
    
    console.log(curso.horario);
    console.log(curso.notificaciones());
    console.log(cursoDeProgramacion);
    console.log(cursoDeMarketing);

//Definición de un Objeto tipo Literal
let perro = {
    nombre : "Lulú",
    edad : 11,
    vacunado : true
}


let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(cantidadHoras){
        this.energia = this.energia-(cantidadHoras*5);
        this.experiencia = this.experiencia+(cantidadHoras*2);
    }
};

//Ejercicio de métodos de los objetos
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(1);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


//arrow function => ejercicio 1
let suma=(num1,num2) =>{num1+num2}
console.log(suma(5,10))

//arrow function => ejercicio 2
let laMitad = numero => numero/2;
console.log(laMitad(8));

//arrow function => ejercicio 3
let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20,4))

//arrow function => ejercicio 4
let tengoQueTrabajar = dia => {
    if(dia == "sábado" || dia == "domingo"){
        return "No tenes que trabajar";
    }else{
        return "si, Nacho, tenes que ir a trabajar"
    }
}
console.log(tengoQueTrabajar("viernes"))

//arrow function => Hora actual
let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ":"+ fecha.getMinutes();
}

function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}

// If ternario
let elMayor = 4 > 10 ? "El 4 es mayor" : "El 10 es mayor";
console.log(elMayor)

//if ternario ejercicio 2
let fruta = "Manzana";
let resultado = fruta == "Manzana"? "Buenísimo, me gustan las manzanas":"Ufa, quería manzana"
console.log(resultado);

//switch
let semaforo ="rojo";
switch(semaforo){
    case "Verde":
        console.log("puedo cruzar");
        break;
    case "Amarillo":
        console.log("Precaución");
        break;
    case "rojo":
        console.log("No cruces, hay que esperar");
        break;   
    default:
        console.log("No funciona el semáforo");
    break;
}


//Ejercicio switch
function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
		console.log("tenés clases");
		case"miércoles":
		console.log("tenés clases")
		case"viernes":
		console.log("tenés clases")
		break;
		default:
		console.log("no tenés clases")
	}
}

//Ejercicio 2 switch
let dia = 'jueves';
function finDeSemana(dia){
switch (dia){
    case "viernes":
    console.log("buen finde");
    break;
    case "lunes":
    console.log("buena semana");
    break;
    default:
    console.log("buen dia")
}
}

//Ejercicio If ternario
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca);

//Ciclo For "tabla del 7"
for (let i=1; i<=10 ; i++){
    console.log(i*7);
}

//Ciclo For 
for (let i=0; i<10; i++){
    console.log("El valor de i es igual a: "+i);
}

//Ciclo for "Loro" repite 5 veces la palabra en consola.
function loro (palabra){
    for (let i=1;i<=5;i++){
        console.log(palabra)
    }
    }
    console.log(loro("Hola Mundo!"))

//ciclo for y % residuo
function noParesDeContarImparesHasta(numero){
    let acumulador= 0
    for (let i=0;i<=numero;i++){
        if (i%2!=0){
        acumulador=acumulador+1
        }
    }return acumulador
} 

//calculadora ejercicio de callbacks
let sumar = (numero1,numero2) => numero1+numero2;
let restar = (numero1,numero2) => numero1-numero2;
let multiplicar = (numero1,numero2) => numero1*numero2;
let dividir = (numero1,numero2) => numero1/numero2;

let calculadora = (numero1,numero2,operacion) => operacion(numero1,numero2);

console.log(calculadora(18,3,restar));

//Callbacks

function doble(numero){
    return numero*2
}

console.log(doble(2))

function triple(numero){
    return numero*3
}

let aplicarCallback = (numero,doble)=>doble(numero);
let aplicarCallback = (numero,triple)=>triple(numero);

console.log(aplicarCallback(10,doble))
console.log(aplicarCallback(10,triple))

//ultimo ejercicio de callbacks
function agregarHttp(url) {
    return "http://"+url
}
function largoString(url){
    return url.length;
}
function procesar(urls,callback){
    let arreglo = []
    for (let i in urls){
        arreglo.push(callback(urls[i]))
    }
    return arreglo
}
console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))

//Ejemplo de método Map
let numeros = [2,4,6];
let dobleDeLosNumeros = numeros.map(function(unNumero){
    return unNumero*2;
});

console.log(dobleDeLosNumeros);

//Ejemplo de método reduce
let numeros = [5,7,16];
let resultado = numeros.reduce(function(acumulador,numero){
    return acumulador + numero;
});

console.log(resultado);

//Ejemplo de método forEach
let paises = ["Argentina","Brasil","Colombia"];
paises.forEach(function(unPais){
    console.log(unPais)
});

let notas = [10,4,5,8,9,2,7];

//Notas hasta el 100 ejercicio map
let notasHastaEl100 = notas.map(function(numero){
    return numero*10;
})
console.log(notasHastaEl100);

//ejemplo filter
let notasAprobadas = notas.filter(function(numero){
    return numero >=7;
})
console.log(notasAprobadas)

//Ejemplo reduce
let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});
console.log(sumaNotas);

//Ejemplo forEach
notas.forEach(function(valor,indice){
    console.log("En la posición "+indice+" tengo el valor "+valor);
})

//Destructuración de un array ejemplo 1
let colores = ["azul","blanco","negro"];
let[colorAzul,colorBlanco,colorAmarillo] = colores;
console.log(colorAzul)

//Destructuración de un array ejemplo 2
let cursos  = ["Programación","MKT","UX","Data Sciencie","UX"];
let [programacion,UX] = cursos;
console.log(programacion);
console.log(mkt);

//Destructuring ejercicio con espacio
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [ ,bariloche, ,china] = destinosDelMundo;
console.log(bariloche);
console.log(china);

console.log("hola mundo bebe")