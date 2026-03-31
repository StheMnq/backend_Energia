function calcular() {
    let potencia = document.getElementById("potencia").value;
    let horas = document.getElementById("horas").value;

    let consumo = (potencia * horas * 30) / 1000;

    document.getElementById("resultado").innerText =
        "Consumo mensal: " + consumo + " kWh";
}