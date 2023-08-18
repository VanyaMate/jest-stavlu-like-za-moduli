const { mapArrToString } = require('./map-arr-to-string')

describe('mapArrToString', () => {
    test('True', () => {
        expect(mapArrToString([ 1, 2, 3 ])).toEqual([ '1', '2', '3' ]);
        expect(mapArrToString([ 1, {}, 3 ])).toEqual([ '1', '3' ]);
        expect(mapArrToString([ 1, false, 3 ])).toEqual([ '1', '3' ]);
        expect(mapArrToString([ 1, '2', 3 ])).toEqual([ '1', '3' ]);
        expect(mapArrToString([ 1, 10, 3 ])).toEqual([ '1', '10', '3' ]);
        expect(mapArrToString([ 1, -1, 3 ])).toEqual([ '1', '-1', '3' ]);
        expect(mapArrToString([])).toEqual([]);
        expect(mapArrToString([ false, false, {}, [], null, 2 ])).toEqual([ '2' ]);
        expect(mapArrToString()).toEqual([]);
    })
})