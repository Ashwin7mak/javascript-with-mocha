let app = require('../app.js');

let assert = require('assert');

let expect = require('chai').expect;


describe('Coin Change problem', function() {
    it('getChange(150, 200) should return [50]', function() {
        expect(app.getChange(150, 200)).to.eql([50]);
    });

    it('getChange(170, 300) should return [100, 20, 10]', function() {
        expect(app.getChange(170, 300)).to.eql([100, 20, 10]);
    });

    it('getChange(290, 400) should return [100, 10]', function() {
        expect(app.getChange(290, 400)).to.eql([100, 10]);
    });

    it('getChange(1430, 1600) should return [100, 50, 20]', function() {
        expect(app.getChange(1430, 1600)).to.eql([100, 50, 20]);
    });

    it('getChange(10, 50) should not return [100]', function() {
        expect(app.getChange(1430, 1600)).not.to.eql([100]);
    });

});