module.exports = {
    mapArrToString: function (arr) {
        if (!Array.isArray(arr)) return [];
        return arr
            .filter((item) => typeof item === 'number')
            .map((number) => number.toString());
    }
}