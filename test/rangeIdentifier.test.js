const rangeIdentifier = require('../rangeIdentifier');
const {expect} = require('chai');

it('should return message "No range of Values "for empty array', () => {
    let res = rangeIdentifier.getRangeOfCurrents([]);
    expect(res).to.equal('No range of values detected');
});

it('should return range "1-1:1 for single input value', () => {
    let res = rangeIdentifier.getRangeOfCurrents([1]);
    expect(res).to.include("{1-1:1}");
});

it('should return range "4-5:2" for [4,5] input range', () => {
    let res = rangeIdentifier.getRangeOfCurrents([4, 5]);
    expect(res).to.include("{4-5:2}");
});

it('should return range of values for multiple current ranges', () => {
    const mockData = [1, 2, 3, 3, 4, 7, 8, 9];
    let res = rangeIdentifier.getRangeOfCurrents(mockData);
    expect(res).to.include('{1-4:5}');
    expect(res).to.include('{7-9:3}');
});
