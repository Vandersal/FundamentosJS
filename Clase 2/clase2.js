var nombre = 'Aheram', apellido = 'Archila'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0)
var cantidadLetrasNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido

//interpolacion de texto
var nombreCompleto1 = `${nombre} ${apellido}`

var str = nombre.substr(1, 2)