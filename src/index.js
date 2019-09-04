const http=require('http');
const path=require('path');    
const express=require('express');
const socketio=require('socket.io');
const mongoose=require('mongoose');


const app=express();
const server=http.createServer(app);
const io=socketio.listen(server);
//DB connection
mongoose.connect('mongodb+srv://adann78:<guerrero78h>@cluster0-mauec.mongodb.net/test?retryWrites=true&w=majority')
.then(db=>console.log('db is connected'))
.catch(err=>console.log(err));


//settings
app.set('port',process.env.PORT || 4000);
require('./sockets')(io);

console.log();


app.use(express.static(path.join(__dirname, 'public')));
server.listen(app.get('port'),()=>{
    console.log('servidor en pto',app.get('port'));
});