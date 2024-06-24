document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('footprintForm');
    const resultsDiv = document.getElementById('results');
    const carbonFootprintP = document.getElementById('carbonFootprint');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const activities = document.getElementById('activities').value;
        const energyUsage = document.getElementById('energyUsage').value;
        const transport = document.getElementById('transport').value;
        const diet = document.getElementById('diet').value;
        
        // Calculate carbon footprint (simple example calculation)
        const carbonFootprint = (energyUsage * 0.5) + (transport * 0.3) + (diet * 0.2);
        
        // Display results
        carbonFootprintP.textContent = `Your estimated carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2 per day.`;
        resultsDiv.classList.remove('hidden');
    });
    
    document.getElementById('recommendations').addEventListener('click', () => {
        alert('Personalized recommendations will be provided here.');
    });
});
