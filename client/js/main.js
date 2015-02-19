var ws = null;
var container = null;
var serverLocation = 'localhost:8081';

window.onload = function () {
	container = document.getElementById("container");
	ws = new WebSocket('ws://' + serverLocation);

	ws.onopen = function(){
		appendMessage("WebSocket open");
	}

	ws.onmessage = function(e){
		var serverMessage = e.data;
		appendMessage(serverMessage);
	}

	ws.onclose = function(){
		appendMessage("ws closed");
	}

	ws.onerror = function(error){
		appendMessage('Error detected: ' + error);
	}
}

function sendMessage() {
	var text = 'Hey server, whats up?';
	if (ws != null) {
		appendMessage("Sending : " + text);
		ws.send(text);
	}
}

function appendMessage(message) {
	container.innerHTML += "<div> - " + message + "</div>";
}

