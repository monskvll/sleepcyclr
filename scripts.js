function pad(value) {
    if (value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}

function calculateTime() {
    let time = new Date();

    for (let i = 1; i < 7; i++) {

        function cycleIterator(i) {
            return i * 90 * 60000;
        };

        time.setTime(time.getTime() + cycleIterator(1));

        document.getElementById('CycleTime' + i).textContent = pad(time.getHours()) + ':' + pad(time.getMinutes());
    }
}

calculateTime();