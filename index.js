const jsonServer =require('json-server')
const server =jsonServer.create()
const middleware =jsonServer.defaults()
const router = jsonServer.router('db.json')
const port =3001 ||process.env.PORT
server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log('employee portal server started at port no'+port)
})