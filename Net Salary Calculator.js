// Function to calculate the net salary based on basic salary and benefits
function calculateNetSalary() {
    // Prompt the user for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));

    // Validate the inputs (must be numbers and non-negative)
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter valid numbers.");
        return; // Exit if any input is invalid
    }

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Initialize variable for tax calculation
    let tax = 0;

    // Calculate PAYE tax based on gross salary ranges
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10% for gross salary up to 24000
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25; // 25% for salary between 24000 and 32333
    } else {
        tax = 2400 + (8333 * 0.25) + (grossSalary - 32333) * 0.30; // 30% for salary above 32333
    }

    // NHIF deductions based on gross salary brackets
    let nhif = 0;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else nhif = 1000; // Cap for salaries above 39999

    // NSSF deductions (capped at a maximum of 200)
    let nssf = Math.min(200, grossSalary * 0.06); // 6% of gross, capped at 200

    // Calculate net salary by deducting tax, NHIF, and NSSF from gross salary
    const netSalary = grossSalary - tax - nhif - nssf;

    // Output the financial details
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax: ${tax}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Call the function to execute it
calculateNetSalary();
