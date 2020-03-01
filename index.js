const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
];

class ColorsChange {
    constructor(colors) {
        this.colors = colors;
        this.isActive = false;
        this.timerId = this.timerId;
        this.startBtn = document.querySelector("[data-action='start']");
        this.stopBtn = document.querySelector("[data-action='stop']");
        this.body = document.querySelector("body");
    }
    addColor = () => {
        this.body.style.background = this.colors[
            this.randomIntegerFromInterval(0, this.colors.length)
        ];
    };

    start = () => {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.timerId = setInterval(this.addColor, 1000);
    };

    stop = () => {
        if (!this.isActive) {
            return;
        }
        this.isActive = false;
        clearInterval(this.timerId);
    };

    randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    addListeners = () => {
        this.stopBtn.addEventListener("click", this.stop);
        this.startBtn.addEventListener("click", this.start);
    };

    startLI = () => {
        this.addListeners();
    };
}

new ColorsChange(colors).startLI();