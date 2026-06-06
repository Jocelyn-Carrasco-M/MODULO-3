// Pido el diámetro y calculo el área
const d = Number(prompt("Ingresa el diámetro (cm):"));

const r = d / 2;

const area = Math.PI * Math.pow(r, 2);

// Salida en 3 lugares
console.log("Área: " + area.toFixed(2) + " cm²");

window.alert("Área: " + area.toFixed(2) + " cm²");

document.getElementById("resultado").innerHTML =
    "Área: " + area.toFixed(2) + " cm²";
    