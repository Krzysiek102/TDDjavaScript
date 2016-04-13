/// <reference path="../typings/qunit/qunit.d.ts" />


module('Points calculator');

test('1:0 win in season 2015/2016 should give 3 points', function () {
    
    //arrange
    var pointsCalculator = new PointsCalculator();
    var seasonStartYear = 2015;
    var goalsScored = 1;
    var goalsLost = 0;
    
    //act
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(seasonStartYear, goalsScored, goalsLost);
    
    //assert
    strictEqual(totalAmountOfPoints, 3);
});
