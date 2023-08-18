module.exports = {
    square: function (number) {
        if (typeof number !== 'number') return 0;
        return Math.pow(number, 2);
    }
}