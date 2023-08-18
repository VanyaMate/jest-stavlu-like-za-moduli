module.exports = {
    validateValue: function (value) {
        if (typeof value !== 'number') {
            return false;
        }
        if (value < 0 || value > 100) {
            return false;
        }
        return true;
    }
}