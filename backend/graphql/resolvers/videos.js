const Video = require('../../models/Video');

module.exports = {
    Query: {
        async getVideos() {
            try {
                const videos = await Video.find();
                return videos;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}