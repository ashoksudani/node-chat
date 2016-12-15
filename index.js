var express = require('express');
var app= express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);


_setViewEngine(app);

app.get("/", function(req, res){
    res.render("page");
});



function _setViewEngine(app) {
    app.set('views', __dirname + '/tpl');
    app.set('view engine', "jade");
    app.engine('jade', require('jade').__express);
    app.use(express.static(__dirname + '/public'));
}




io.on('connection', function(socket) {
    socket.emit('chatEvent', 'Welcome to chat app !');
    socket.on('chatEvent', function(data) {
        console.log('message recevied' + data);
        io.emit('chatEvent', data);
    });
});




console.log("Listening on port ");

