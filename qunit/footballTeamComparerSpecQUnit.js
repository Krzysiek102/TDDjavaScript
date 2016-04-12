/// <reference path="../typings/qunit/qunit.d.ts" />

module('Footbal Team Comparer');

test('Compare one win with one defeat', function () {
    //arrange
    var teamOneResults = ["2:1"];
    var teamTwoResults = ["1:2"];
    
    //act
    var comparisonResult = compareTeamResults(teamOneResults, teamTwoResults);
    
    //assert
    
    strictEqual(comparisonResult, 1, "Team with one win should be higher then team with one defeat");
});
