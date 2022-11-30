function calcKMI() {
    var result;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    try {
        if (weight <= 0 || height <= 0) {
            throw 'Invalid input!';
        }
        result = weight / Math.pow(height/100, 2); // Kaal (kg) jagatud pikkuse (m) ruuduga
        result = Math.round(result * 100) / 100 // Kahe koma kohani ümardamine
        if (result <= 0.0) {
            throw 'Invalid result!';
        } else if (result >= 18.5 && result <= 25.0) {
            alert("Teie kehamassiindeks on " + result + " mis on normide piires.");
        } else if (result < 18.5) {
            console.log(location.hostname + "/under.html?")
            window.location.assign("/under.html?kmi="+result);
        } else {
            console.log(location.hostname + "/over.html?")
            window.location.assign("/over.html?kmi="+result);
        }
    } catch (error) {
        alert("Antud sisenditega ei saanud kehamassiindeksit arvutada.\n\nPalun proovige uuesti!");
    }
}