const timeInput = document.querySelector('.time__value');
const distanceInput = document.querySelector('.distance__value');
const submit = document.querySelector('.button');
const showResult = document.querySelector(".result")
const getTimeType = document.getElementById('time-select');
const getDistanceType = document.getElementById('distance-select');

function toMinutes(arr) {
    return arr.map((item) => item * 60);
}; 

function toMeters(arr) {
    return arr.map((item) => item * 1000);
}

function toSum(arr) {
   return arr.reduce((acc, item) => acc + item, 0);
}

function toNumber(strArr) {
    const newArr = strArr.map((item) => item.replaceAll(",", "."));
    return newArr.map((item) => Number(item));
}

function showError() {
    showResult.innerText = "Fill all inputs correctly";    
}

function showAverageSpeed(e) {
    e.preventDefault();

    let arrOfTimes = [];
    let arrOfValues = [];
    const timeValue = timeInput.value;
    const distaneValue = distanceInput.value;
    const getTimeTypeValue = getTimeType.value;
    const getDistanceTypeValue = getDistanceType.value;

    arrOfTimes = toNumber(timeValue.split(' '));
    arrOfValues = toNumber(distaneValue.split(' '));

    if (arrOfTimes == 0 || arrOfValues == 0) {
        return showError();
    }
    if (getTimeTypeValue === "inHours") {
        arrOfTimes = toMinutes(arrOfTimes);          
    }
    if (getDistanceTypeValue === "inKilometers") {
        arrOfValues = toMeters(arrOfValues);          
    }

    let averageSpeed = toSum(arrOfValues) / toSum(arrOfTimes);

    if (isNaN(averageSpeed)) {
        return showError();   
    }
    const format = `<div>Your average speed ${averageSpeed}</div>`;
    showResult.innerHTML = format;
}

submit.addEventListener("click", showAverageSpeed);


