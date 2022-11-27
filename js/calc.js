function calcKMI() {
    var result;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    try {
        if (weight <= 0 || height <= 0) {
            throw 'Invalid input!';
        }
        result = weight / Math.pow(height/100, 2);
        if (result <= 0.0) {
            throw 'Invalid result!';
        } else if (result >= 18.5 && result <= 30.0) {
            alert("Teie kehamassiindeks on " + Math.round(result * 100) / 100 + " mis on normide piires.");
        } else if (result < 18.5) {
            console.log(location.hostname + "/under.html?")
            window.location.assign("/under.html");
        } else {
            console.log(location.hostname + "/over.html?")
            window.location.assign("/over.html");
        }
    } catch (error) {
        alert("Antud sisenditega ei saanud kehamassiindeksit arvutada. Palun proovige uuesti!");
    }
}