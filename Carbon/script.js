document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('footprintForm');
    const resultsDiv = document.getElementById('results');
    const carbonFootprintP = document.getElementById('carbonFootprint');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const energyUsage = parseFloat(document.getElementById('energyUsage').value);
        const transport = parseFloat(document.getElementById('transport').value);
        const diet = parseFloat(document.getElementById('diet').value);

        // Calculate carbon footprint (simple example calculation)
        const carbonFootprint = (energyUsage * 0.5) + (transport * 0.3) + (diet * 0.2);

        // Display results
        carbonFootprintP.textContent = `Your estimated carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2 per day.`;
        resultsDiv.classList.remove('hidden');
        
    });
});
