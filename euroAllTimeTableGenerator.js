'use strict';

function OldPointsCalculator(){
    
};
OldPointsCalculator.prototype.GetPoints = function  (goalsScored, goalsLost){
    if (goalsScored > goalsLost){
        return 2;
    }else if (goalsScored === goalsLost){
        return 1;
    }else {//if (goalsScored<goalsLost)
        return 0;
    }
}

function NewPointsCalculator (){
    
}
NewPointsCalculator.prototype.GetPoints = function  (goalsScored, goalsLost){
    if (goalsScored>goalsLost){
        return 3;
    }
    if (goalsScored === goalsLost){
        return 1;
    }else {//if (goalsScored<goalsLost)
        return 0;
    }    
}

function CalculatorSelector (){
    
}
CalculatorSelector.prototype.GetCalculator = function  (year){
    if (year >=1996)
    {
        return new NewPointsCalculator();
    }else { //if (seasonStartYear <1996)
        return new OldPointsCalculator();
    }
}

function PointsCalculator(calculatorSelector){
    if (calculatorSelector === undefined){
        this.calculatorSelector = new CalculatorSelector();    
    }else{
        this.calculatorSelector = calculatorSelector;
    }
};

PointsCalculator.prototype.GetPoints = function(year, goalsScored, goalsLost){    
    var pointsCalculator = this.calculatorSelector.GetCalculator(year);
    return pointsCalculator.GetPoints(goalsScored, goalsLost);
} 