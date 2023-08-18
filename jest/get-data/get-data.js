const axios              = require('axios');
const { mapArrToString } = require('../map-arr-to-string/map-arr-to-string');

module.exports = {
    getPostIds: async function () {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const postIds  = response.data.map((post) => post.id);
            return mapArrToString(postIds);
        } catch (e) {
            return [];
        }
    }
}