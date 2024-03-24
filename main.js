// Get references to the HTML elements
var savingsRateInput = document.getElementById('savingsRate');
var withdrawalRateInput = document.getElementById('withdrawalRate');
var yearsInput = document.getElementById('years');
var calculateButton = document.getElementById('calculate');
var projectedSavingsOutput = document.getElementById('projectedSavings');

/// Get references to the HTML elements
var savingsRateInput = document.getElementById('savingsRate');
var withdrawalRateInput = document.getElementById('withdrawalRate');
var yearsInput = document.getElementById('years');
var calculateButton = document.getElementById('calculate');
var savingsTable = document.getElementById('savingsTable');  // Change this line

// Define the calculateSavings function
function calculateSavings() {
    var savingsRate = Number(savingsRateInput.value);
    var withdrawalRate = Number(withdrawalRateInput.value);
    var years = Number(yearsInput.value);

    // Clear any existing rows from the table
    while (savingsTable.rows.length > 1) {
        savingsTable.deleteRow(1);
    }

    // Calculate the savings for each year and add a row to the table
    var totalSavings = 0;
    for (var i = 1; i <= years; i++) {
        var yearlyGain = savingsRate * (withdrawalRate / 100);
        totalSavings += yearlyGain;

        // Create a new row and cells
        var row = savingsTable.insertRow(-1);
        var yearCell = row.insertCell(0);
        var savingsCell = row.insertCell(1);
        var gainCell = row.insertCell(2);

        // Set the cell values
        yearCell.textContent = i;
        savingsCell.textContent = totalSavings.toFixed(2);
        gainCell.textContent = yearlyGain.toFixed(2);
    }
}

// Add an event listener to the calculate button
calculateButton.addEventListener('click', calculateSavings);