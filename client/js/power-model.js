const socket = io();

// TODO: Prevent users from spamming the start/stop buttons
// TODO: Check if power model is already running
function startPowerModel() {
    console.log('Starting power model');
    socket.emit('start-power-model');
}

function stopPowerModel() {
    console.log('Stopping power model');
    socket.emit('stop-power-model');
    document.getElementById('start-button').disabled = false;
}

socket.on('power-model-running', function() {
    console.log('Power model running');
    // Disable start button if power model is currently running
    document.getElementById('start-button').disabled = true;
})