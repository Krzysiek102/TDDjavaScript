/// <reference path="../typings/qunit/qunit.d.ts" />
'use strict';

var pointsCalculator;
module('Points calculator', {
    setup: function  (){
        pointsCalculator = new PointsCalculator();    
    },
});

test('1:0 in year 2012 should give 3 points', function () {
    var totalAmountOfPoints = pointsCalculator.GetPointsForResult(2012, 1, 0);
    strictEqual(totalAmountOfPoints, 3);
});

test('1:1 in year 2012 should give 1 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForResult(2012, 1, 1);
    strictEqual(totalAmountOfPoints, 1);    
});

test('0:1 in year 2012 should give 0 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForResult(2012, 0, 1);
    strictEqual(totalAmountOfPoints, 0);    
});

test('1:0 in year 1984 should give 2 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForResult(1984, 1, 0);
    strictEqual(totalAmountOfPoints, 2);    
});

test('1:1 in year 1984 should give 1 point', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForResult(1984, 1, 1);
    strictEqual(totalAmountOfPoints, 1);    
});

test('0:1 in year 1984 should give 0 points', function  (){
    var totalAmountOfPoints = pointsCalculator.GetPointsForResult(1984, 0, 1);
    strictEqual(totalAmountOfPoints, 0);    
});


var oldPointsCalculator;
module('Old points calculator', {
    setup: function  (){
        oldPointsCalculator = new OldPointsCalculator();
    }
});

test('Old points calculator should give 2 points for winning 1:0', function  (){
    var totalAmountOfPoints = oldPointsCalculator.GetPointsForResult(1, 0);
    strictEqual(totalAmountOfPoints, 2);
})


var newPoinstCalculator;
module('New points calculator', {
    setup: function  (){
        newPoinstCalculator = new NewPointsCalculator();
    }
})

test('New points calculator should give 3 points for winning 1:0', function  (){
    var totalAmountOfPoints = newPoinstCalculator.GetPointsForResult(1, 0);
    strictEqual(totalAmountOfPoints, 3);
})

var calculatorSelector;
module('Calculator selector',{
    setup: function  (){
        calculatorSelector = new CalculatorSelector();
    }
});

test('Results in year 2012 should be calculated using new points calculator', function  (){
    var calculator = calculatorSelector.GetCalculator(2012);
    ok(calculator instanceof NewPointsCalculator);
});


test('Results in year 1984 should be calculated using old points calculator', function  (){
    var calculator = calculatorSelector.GetCalculator(1984);
    ok(calculator instanceof OldPointsCalculator);
});
