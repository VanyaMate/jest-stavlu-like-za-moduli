const { getPostIds } = require('./get-data/get-data');

console.log(getPostIds().then((data) => console.log(data)));