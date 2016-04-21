/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/sinon/sinon.d.ts" />
'use strict';

describe('Points calculator', function () {
    var pointsCalculator;
    
    beforeEach(function () {
        pointsCalculator = new PointsCalculator();  
    });

    it('should give 3 points for winning assuming we use new calculator', function  (){
        var calculatorSelector = sinon.stub(new CalculatorSelector());
        calculatorSelector.GetCalculator.returns(new NewPointsCalculator());
        var pointsCalculator = new PointsCalculator(calculatorSelector);
        var points = pointsCalculator.GetPointsForResult(undefined, 1, 0);
        expect(points).toBe(3);
    });
});


    