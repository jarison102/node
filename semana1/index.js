/*const op=require('./ejercicio1.js')
op.suma(50,5)
op.resta(6,10)
op.multi(2,2)
op.divi(20,100)
op.potenciar(5,2)
op.radicar(4,2)
console.log(op)*/
// requerir modulo http
const http=require('http')
//funcion callback para manejar el servidor
 function handleServer(req,res){
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>esta es la respuesta del servidor OK</h1>')
    res.end()
 }
 //crear el server 
 
 const server=http.createServer(handleServer).listen(5000)
