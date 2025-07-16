function calculateFootprint() {
 const electricity = parseFloat(document.getElementById('electricity').value) || 0;
  const gas = parseFloat(document.getElementById('gas').value) || 0;
  const transportation = parseFloat(document.getElementById('transportation').value) || 0;
  const electricityFactor = 0.404; // kg CO2 per kWh
  const gasFactor = 5.31; // kg CO2 per therm
  const transportationFactor = 0.258; // kg CO2 per mile
  const totalFootprint = (electricity * electricityFactor) + (gas * gasFactor) + (transportation * transportationFactor);
 document.getElementById('result').innerText =  `Your estimated carbon footprint is ${totalFootprint.toFixed(2)} kg CO2 per year.`;
  }
document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page refresh
   calculateFootprint();
  }); 