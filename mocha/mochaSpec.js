///reference path="../typings/mocha/mocha.d.ts"
///reference path="../typings/chai/chai.d.ts"
'use strict';

describe('Points calculator', function () {
    var pointsCalculator;

    beforeEach(function () {
        pointsCalculator = new PointsCalculator();
    });

    it('should give 3 points for winning 4:0 in 2008', function () {
        var points = pointsCalculator.GetPointsForResult(2008, 3, 0);
        chai.expect(points).to.equal(3);
    });

    it('should give 2 for winning 4:0 in 1992', function () {
        var points = pointsCalculator.GetPointsForResult(1992, 3, 0);
        chai.expect(points).to.equal(2);
    });
});
