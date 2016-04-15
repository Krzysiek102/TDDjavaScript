/// <reference path="../typings/qunit/qunit.d.ts" />

'use strict';

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

test('0:3 in season 1986/1987 should give -1 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1986, 0, 3);
    strictEqual(totalAmountOfPoints, -1);    
});

test('4:0 in season 1960/1961 should give 2 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1960, 4, 0);
    strictEqual(totalAmountOfPoints, 2);    
});

test('4:0 in season 1990/1991 should give 2 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1990, 4, 0);
    strictEqual(totalAmountOfPoints, 2);    
});

test('1:1 in season 1960/1961 should give 1 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1960, 1, 1);
    strictEqual(totalAmountOfPoints, 1);    
});

test('1:1 in season 1990/1991 should give 1 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1990, 1, 1);
    strictEqual(totalAmountOfPoints, 1);    
});

test('0:4 in season 1960/1961 should give 0 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1960, 0, 4);
    strictEqual(totalAmountOfPoints, 0);    
});

test('0:4 in season 1990/1991 should give 0 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForTheGame(1990, 0, 4);
    strictEqual(totalAmountOfPoints, 0);    
});

var pointsCalculatorValidator;

module('Points calculator validator', {
    setup: function  (){
        pointsCalculatorValidator = new PointsCalculatorValidator();    
    },
});

test('result before year 1925 should be not valid', function  (){
    var isValid = pointsCalculatorValidator.IsValid(1924, 1, 0);
    notOk(isValid);
});

test('result with negative number of goals scored is not valid', function  (){
    var isValid = pointsCalculatorValidator.IsValid(1990, -1, 0);
    notOk(isValid);
});

test('result with negative number of goals lost is not valid', function  (){
    var isValid = pointsCalculatorValidator.IsValid(1990, 1, -1);
    notOk(isValid);
});