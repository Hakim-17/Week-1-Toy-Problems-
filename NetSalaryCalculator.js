function salaryCalculator(basicSalary, benefits){
    const grossSalary = (basicSalary + benefits);
    let nssf = 0;
    let nhif = 0;
    let paye = 0;

    if (grossSalary <= 5999){
        nhif = 150;
    }
    else if (grossSalary >= 6000 && grossSalary <=7999){
        nhif = 300;
    }
    else if (grossSalary >= 8000 && grossSalary <=11999){
        nhif = 400;
    }
    else if (grossSalary >=12000 && grossSalary <14999){
        nhif = 500;
    }
    else if(grossSalary >= 15000 && grossSalary <19999){
        nhif = 600;
    }
    else if (grossSalary >= 20000 && grossSalary <= 24999){
        nhif = 750;
    }
    else if (grossSalary >= 25000 && grossSalary <= 24999){
        nhif = 850;
    }
    else if (grossSalary >= 30000 && grossSalary <=34999){
        nhif = 900;
    }
    else if (grossSalary >= 35000 && grossSalary <= 39999){
        nhif = 950;
    }
    else if (grossSalary >= 40000 && grossSalary <= 44999){
        nhif = 1000;
    }
    else if (grossSalary >= 45000 && grossSalary <= 49999){
        nhif = 1100;
    }
    else if (grossSalary >= 50000 && grossSalary <= 59999){
        nhif = 1200;
    }
    else if (grossSalary >= 60000 && grossSalary <= 69999){
        nhif = 1300;
    }
    else if (grossSalary >= 70000 && grossSalary <= 79000){
        nhif = 1400;
    }
    else if (grossSalary <= 80000 && grossSalary <= 89999){
        nhif = 1500;
    }
    else if (grossSalary <= 90000 && grossSalary <= 99999){
        nhif = 1600;
    }
    else {
        nhif = 1700;
    }



    if (grossSalary <= 18000){
        nssf = 0.06 * grossSalary;
    }
    else {
        nssf = 1080;
    }
    const taxableSalary = grossSalary - nssf
    if (taxableSalary <= 24000){
        paye = 0.1 * taxableSalary;
    }
    else if (taxableSalary >= 24001 && taxableSalary <=32333){
        paye = 0.25 * taxableSalary;
    }
    else if (taxableSalary >= 32334 && taxableSalary <= 500000){
        paye = 0.3 * taxableSalary;
    }
    else if (taxableSalary >= 500001 && taxableSalary <= 800000){
        paye = 0.325 * taxableSalary;
    }
    else{
        paye = 0.35 * taxableSalary
    }

    const netSalary = grossSalary - (paye + nhif + nssf);
    
    return `
    Gross Salary:${grossSalary},
    Paye:${paye}, 
    NHIF:${nhif},
    NSSF:${nssf},
    Net Salary:${netSalary}`
}

console.log(salaryCalculator(40000,20000));