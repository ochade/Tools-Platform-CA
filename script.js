/**
 * Accepts a variable number of arguments and multiplies them.
 */
function multiplyAll(...numbers) {
    
    // .reduce iterates through the array to produce a single product
    return numbers.reduce((accumulator, current) => accumulator * current, 1);
}

// Example usage:
console.log(multiplyAll(2, 5, 10)); // Output: 100
console.log(multiplyAll(7, 3));     // Output: 21





/**
 /**
 * 1. Multiplier Function
 * Requirement: Accepts a variable number of arguments and returns the product.
 */
function multiplyAll(...numbers) {
    if (numbers.length === 0) return 0;
    
    // Using .reduce to multiply through the array
    const result = numbers.reduce((accumulator, current) => accumulator * current, 1);
    
    console.log("Multiplication Result:", result);
    return result;
}

/**
 * 2. Remote API Call and Visualization
 * Requirement: Fetch user data, transform it, and plot a Bar Chart.
 * Purpose: Visualizing Geographic Diversity via City Name character lengths.
 */
async function fetchAndPlotData() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Step 1: Remote API Call
        const response = await fetch(url);
        if (!response.ok) throw new Error("API call failed");
        const users = await response.json();

        // Step 2: Transform the data
        // X-Axis: The name of the city (Categorical)
        // Y-Axis: The length of the city name (Numerical Transformation)
        const plotData = users.map(user => ({
            index: user.address.city,
            value: user.address.city.length
        }));

        // Step 3: Plot using Tensorflow.js visor
        const container = { 
            name: 'MSc Assignment: City Name Analysis', 
            tab: 'Geographic Diversity' 
        };
        
        const options = {
            xLabel: 'City Name',
            yLabel: 'Character Count',
            height: 300
        };

        // Renders the chart in the visor (side panel)
        tfvis.render.barchart(container, plotData, options);
        
        console.log("Data transformed and plotted successfully!");

    } catch (error) {
        // Error handling for connectivity issues
        console.error("Error fetching or plotting data:", error);
    }
}

// Automatically trigger both functions
multiplyAll(2, 5, 10); // Tests Requirement 1 (Result: 100)
fetchAndPlotData();    // Runs Requirement 2