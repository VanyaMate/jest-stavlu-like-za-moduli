module.exports = {
    delay: function (callback, ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(callback())
            }, ms);
        })
    }
}