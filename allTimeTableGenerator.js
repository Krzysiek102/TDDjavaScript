'use strict';

function OldPointsCalculator(){
    
};
OldPointsCalculator.prototype.GetPointsForResult = function  (goalsScored, goalsLost){
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
NewPointsCalculator.prototype.GetPointsForResult = function  (goalsScored, goalsLost){
    if (goalsScored>goalsLost){
        return 3;
    }
    if (goalsScored === goalsLost){
        return 1;
    }else {//if (goalsScored<goalsLost)
        return 0;
    }    
}

function PointsCalculator(){
    this.newPointsCalculator = new NewPointsCalculator();
    this.oldPointsCalculator = new OldPointsCalculator();
};

PointsCalculator.prototype.GetPointsForResult = function(seasonStartYear, goalsScored, goalsLost){    
    var pointsCalculator;
    if (seasonStartYear >=1996)
    {
        pointsCalculator = this.newPointsCalculator; 
    }else { //if (seasonStartYear <1996)
        pointsCalculator = this.oldPointsCalculator;
    }
    return pointsCalculator.GetPointsForResult(goalsScored, goalsLost);
} 