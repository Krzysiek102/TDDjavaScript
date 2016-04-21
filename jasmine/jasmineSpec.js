/// <reference path="../typings/jasmine/jasmine.d.ts" />
'use strict';

describe('Points calculator', function () {
    var pointsCalculator;
    
    beforeEach(function () {
        pointsCalculator = new PointsCalculator();  
    });
    
    it('should give 3 points for winning 4:0 in 2008', function () {
        var totalAmountOfPoints = pointsCalculator.GetPointsForResult(2008, 3, 0);
        expect(totalAmountOfPoints).toBe(3);
    });
    
    it('should give 2 for winning 4:0 in 1992', function () {
        var totalAmountOfPoints = pointsCalculator.GetPointsForResult(1992, 3, 0);
        expect(totalAmountOfPoints).toBe(2);
    });
    
    it('should give 3 points for winning assuming we use new calculator', function  (){
        var calculatorSelector = new CalculatorSelector();
        calculatorSelector.GetCalculator = function(year){
            return new NewPointsCalculator();        
        };
        var pointsCalculator = new PointsCalculator(calculatorSelector);
        var totalAmountOfPoints = pointsCalculator.GetPointsForResult(undefined, 1, 0);
        expect(totalAmountOfPoints).toBe(3);
    });
});


    