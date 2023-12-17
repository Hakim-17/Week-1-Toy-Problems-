function studentsGrade(grade){

    if (grade > 79){
        return 'A';
    }
    else if (grade >= 60 && grade < 80){
        return 'B';
    }
    else if (grade >= 49 && grade < 60){
        return 'C';
    }
    else if (grade >= 40 && grade < 49){
        return 'D';
    }
    else if (grade < 40){
        return 'E';
    }
}

console.log(studentsGrade(50));
