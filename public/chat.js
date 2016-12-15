window.onload = function() {
    var messages = [];
    var socket = io('http://localhost:3000');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    sendButton.onclick = function() {
        socket.emit('chatEvent', field.value);
    };

    socket.on('chatEvent', function(msg) {
        _updateMsg(msg);
    });

    function _updateMsg(msg) {
        var element = document.createElement('div');
        element.innerText = msg;
        content.append(element);
    }


};