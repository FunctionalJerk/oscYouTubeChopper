// JS by https://github.com/capital-G

const video = document.querySelector(".video-stream");

// localhost:8080 serves a websocket server and then
// broadcast the OSC message to the receivers via websocket
const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("message", async (event) => {
    // assuming the message is a dict
    video.currentTime = event.data;
});
