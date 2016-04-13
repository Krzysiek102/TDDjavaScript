var PointsCalculator = function  (){
    
};

PointsCalculator.prototype.GetPointsForTheGame = function(seasonStartYear, goalsScored, goalsLost){
    if (seasonStartYear >=1995)
    {
        if (goalsScored>goalsLost){
            return 3;
        }else if (goalsScored === goalsLost){
            return 1;
        }else{//if (goalsScored < goalsLost)
            return 0;
        } 
    }
    throw "Not implemented";
} 