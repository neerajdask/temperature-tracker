class TempTracker {
    temperatures = [];
    newTemperature = 0;
    maxTemperature = 0;
    minTemperature = 0;
    avgTemperature = 0;
    sum = 0;

    /**
     * Variables to get DOM elements and display appropriate values.
     */
    highTemp = document.getElementById('highTemp');
    lowTemp = document.getElementById('lowTemp');
    avgTemp = document.getElementById('avgTemp');
    tempInput = document.getElementById('tempInput');
    updateBtn = document.getElementById('updateTemp');
    tempList = document.getElementById('tempList');

    constructor() {
        if (this.updateBtn) {
            this.updateBtn.addEventListener('click', () => {
                this.insert(parseInt(this.tempInput.value));
            });
        }
    }

    /**
     * A function to insert values to a temperature tracker array.
     * The array is used for UI visualization purposes only.
     * The complexity remains O(1).
     * @param {number} value : New value inserted from the input on button click.
     */

    insert(value) {
        this.newTemperature = value;
        this.temperatures.push(value);
        console.log(this.temperatures);
        this.sum += value;
        this.getHighestTemp();
        this.getLowestTemp();
        // this.getHighestTemp(value);
        // this.getLowestTemp(value);
        this.getAvgTemp();
        this.updateTemperatures(value);
    }

    /**
     * A function that gets the highest temperature that we have seen so far.
     * Max value is calculated on the fly as they are inserted from the UI.
     * @returns : The max value is updated.
     */

    getHighestTemp() {
        if (this.newTemperature > this.maxTemperature) {
            this.maxTemperature = this.newTemperature;
        }
        return this.maxTemperature;
    }

    /**
     * A function that gets the lowest temperature that we have seen so far.
     * Min value is calculated on the fly as they are inserted from the UI.
     * @returns : The min value is updated.
     */

    getLowestTemp() {
        if (this.temperatures.length === 1) {
            this.minTemperature = this.newTemperature;
        } else if (
            this.temperatures.length > 1 &&
            this.newTemperature < this.minTemperature
        ) {
            this.minTemperature = this.newTemperature;
        }
        return this.minTemperature;
    }

    /**
     * A function that gets the average of all the temperature that we have seen so far.
     * There are variables that keep track of the sum and average values.
     * @returns : The average value is updated.
     */

    getAvgTemp() {
        if (this.temperatures.length) {
            this.avgTemperature = (
                this.sum / this.temperatures.length
            ).toFixed(2);
        }
        return this.avgTemperature;
    }

    /**
     * A function that updates the UI for visualization.
     * @param {value} value : new Value that is being inserted
     */

    updateTemperatures() {
        this.highTemp.textContent = `${this.maxTemperature}°C`;
        this.lowTemp.textContent = `${this.minTemperature}°C`;
        this.avgTemp.textContent = `${this.avgTemperature}°C`;

        const element = document.createElement('li');
        element.textContent = `${this.newTemperature}°C`;
        this.tempList.appendChild(element);
    }
}

const temp = new TempTracker();

/**
 * If the reviewver doesn't want to see the UI, they can simply uncomment the following code to
 * directly invoke the class functions.
 */

// console.log(temp.insert(8));
// console.log(temp.getHighestTemp());
// console.log(temp.getLowestTemp());
// console.log(temp.getAvgTemp());
