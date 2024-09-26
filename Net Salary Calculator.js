function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));
    
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (assuming monthly income tax rates)
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10%
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25; // 25%
    } else {
        tax = 2400 + (8333 * 0.25) + (grossSalary - 32333) * 0.30; // 30%
    }

    // NHIF deductions (simplified)
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
    else nhif = 1000;

    // NSSF deductions (assumed flat rate)
    let nssf = Math.min(200, grossSalary * 0.06); // capped at 200

    const netSalary = grossSalary - tax - nhif - nssf;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax: ${tax}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

calculateNetSalary();
