document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const litrosPorHora = parseInt(document.getElementById('litros').value);
    const litrosPorMes = litrosPorHora * 24 * 30; // 24 horas en un día, 30 días en un mes
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Consumo mensual: "${litrosPorMes}" litros`;
});
