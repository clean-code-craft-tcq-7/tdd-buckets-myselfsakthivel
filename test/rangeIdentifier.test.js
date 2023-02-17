const getRangeOfCurrents = require('../rangeIdentifier');
const {expect} = require('chai');

it('should return message "No range of Values "for empty array', () => {
    let res = getRangeOfCurrents([]);
    expect(res).to.equal('No range of values detected');
});

it('should return range "1-1:1 for single input value', () => {
    let res = getRangeOfCurrents([1]);
    expect(res).to.include("{1-1:1}");
});

it('should return range "4-5:2" for [4,5] input range', () => {
    let res = getRangeOfCurrents([4, 5]);
    expect(res).to.include("{4-5:2}");
});

it('should return range of values for multiple current ranges', () => {
    const mockData = [1, 2, 3, 3, 4, 7, 8, 9];
    let res = getRangeOfCurrents(mockData);
    expect(res).to.include('{1-4:5}');
    expect(res).to.include('{7-9:3}');
});
