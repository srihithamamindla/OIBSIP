function convertTemp() {
    let degree = document.getElementById("degree").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (degree === "") {
        result.value = "Please enter a number";
        return;
    }

    degree = parseFloat(degree);
    let answer;

    if (type === "fahrenheit") {
        answer = ((degree - 32) * 5 / 9).toFixed(2) + " °C";
    } 
    else if (type === "celsius") {
        answer = ((degree * 9 / 5) + 32).toFixed(2) + " °F";
    } 
    else if (type === "kelvin") {
        answer = (degree - 273.15).toFixed(2) + " °C";
    }

    result.value = answer;
}