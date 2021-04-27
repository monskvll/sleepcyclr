document.getElementById('timeButton').addEventListener('click', getTime);

function pad(value) {
    if (value < 10) {
        return '0' + value;
    } else {
        return value
    }
}

function getTime() {
    let currentTime = new Date();

    document.getElementById('zeroCycleTime').textContent = pad(currentTime.getHours()) + ':' + pad(currentTime.getMinutes());

    document.getElementById('firstCycleTime').textContent = pad((currentTime.getHours() + 1) % 24) + ':' + pad((currentTime.getMinutes() + 45) % 60);

    document.getElementById('secondCycleTime').textContent = pad((currentTime.getHours() + 3) % 24) + ':' + pad((currentTime.getMinutes() + 15) % 60);

    document.getElementById('thirdCycleTime').textContent = pad((currentTime.getHours() + 4) % 24) + ':' + pad((currentTime.getMinutes() + 45) % 60);

    document.getElementById('fourthCycleTime').textContent = pad((currentTime.getHours() + 6) % 24) + ':' + pad((currentTime.getMinutes() + 15) % 60);

    document.getElementById('fifthCycleTime').textContent = pad((currentTime.getHours() + 7) % 24) + ':' + pad((currentTime.getMinutes() + 45) % 60);

    document.getElementById('sixthCycleTime').textContent = pad((currentTime.getHours() + 9) % 24) + ':' + pad((currentTime.getMinutes() + 15) % 60);
}