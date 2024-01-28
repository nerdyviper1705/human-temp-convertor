function convertTemperature() {
    var celsiusInput = document.getElementById("celsius").value;
    var celsius = parseFloat(celsiusInput);
  
    if (isNaN(celsius)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    var fahrenheit = Math.round(celsius * (9 / 5) + 32);
  
    document.getElementById("result").innerHTML = "Temperature in Fahrenheit: " + fahrenheit;
  
    var normalImage = document.getElementById("normalImage");
    var highTemperatureImage = document.getElementById("highTemperatureImage");
  
    if (fahrenheit < 99) {
      alert("It's a normal temperature.");
      normalImage.style.display = "block";
      highTemperatureImage.style.display = "none";
    } else {
      alert("Consult a doctor immediately.");
      normalImage.style.display = "none";
      highTemperatureImage.style.display = "block";
    }
  }
  