'use strict';

function PointsCalculatorValidator(){
    
};

PointsCalculatorValidator.prototype.IsValid = function IsValid(seasonStartYear, goalsScored, goalsLost){
    if (seasonStartYear < 1925){
        return false;
    }
    if (goalsScored < 0 || goalsLost < 0){
        return false;
    }
    return true;
};

function PointsCalculator(){
    
};
PointsCalculator.prototype.POINTS_FOR_DEFEAT = 0;
PointsCalculator.prototype.POINTS_FOR_DRAW = 1;
PointsCalculator.prototype.POINTS_FOR_WIN_OLD = 2;
PointsCalculator.prototype.POINTS_FOR_WIN_NEW = 3;
PointsCalculator.prototype.POINTS_FOR_DECISIVE_WIN_OLD = 3;
PointsCalculator.prototype.POINTS_FOR_DECISIVE_DEFEAT_OLD = -1;

PointsCalculator.prototype.GetPointsForTheGame = function(seasonStartYear, goalsScored, goalsLost){    
    if (seasonStartYear >=1995)
    {
        if (goalsScored>goalsLost){
            return this.POINTS_FOR_WIN_NEW;
        }
        if (goalsScored === goalsLost){
            return this.POINTS_FOR_DRAW;
        }else {//if (goalsScored<goalsLost)
            return this.POINTS_FOR_DEFEAT;
        }
    }else if (seasonStartYear>=1986 && seasonStartYear <=1989){
        if (goalsScored>=goalsLost+3){
            return this.POINTS_FOR_DECISIVE_WIN_OLD;
        } else if (goalsScored>goalsLost){
            return this.POINTS_FOR_WIN_OLD;
        }else if (goalsScored === goalsLost){
            return this.POINTS_FOR_DRAW;
        }
        else if (goalsScored+3 <= goalsLost){
            return this.POINTS_FOR_DECISIVE_DEFEAT_OLD;
        }else {// if (goalsScored<goalsLost && goalsScored+3>goalsLost)
            return this.POINTS_FOR_DEFEAT;
        }
    }else if ((seasonStartYear>=1927 && seasonStartYear<1986) || (seasonStartYear>=1990 && seasonStartYear<=1994)) {
        if (goalsScored> goalsLost){
            return this.POINTS_FOR_WIN_OLD;
        }else if (goalsScored === goalsLost){
            return this.POINTS_FOR_DRAW;
        }else {//if (goalsScored<goalsLost)
            return this.POINTS_FOR_DEFEAT;
        }
    }
    
    throw "Not implemented";
} 