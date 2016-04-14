/// <reference path="../typings/qunit/qunit.d.ts" />

var pointsCalculator;

module('Points calculator', {
    setup: function  (){
        pointsCalculator = new PointsCalculator();    
    },
});

test('1:0 in season 2015/2016 should give 3 points', function () {
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(2015, 1, 0);
    strictEqual(totalAmountOfPoints, 3);
});

test('1:1 in season 2015/2016 should give 1 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(2015, 1, 1);
    strictEqual(totalAmountOfPoints, 1);    
});

test('0:1 in season 2015/2016 should give 0 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(2015, 0, 1);
    strictEqual(totalAmountOfPoints, 0);    
});

test('1:0 in season 1986/1987 should give 2 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1986, 1, 0);
    strictEqual(totalAmountOfPoints, 2);    
});

test('3:0 in season 1986/1987 should give 3 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1986, 3, 0);
    strictEqual(totalAmountOfPoints, 3);    
});

test('1:1 in season 1986/1987 should give 1 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1986, 1, 1);
    strictEqual(totalAmountOfPoints, 1);    
});

test('0:1 in season 1986/1987 should give 0 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1986, 0, 1);
    strictEqual(totalAmountOfPoints, 0);    
});

test('0:3 in season 1986/1987 should give -1 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1986, 0, 3);
    strictEqual(totalAmountOfPoints, -1);    
});