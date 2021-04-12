const Video = require("../../models/Video");

module.exports = {
  Query: {
    async getVideos() {
      try {
        const videos = await Video.find();
        return videos;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async singleUpload(_, { file }) {
        const {stream, filename, mimetype, encoding} = await file;

        return {filename, mimetype, encoding, url: ''}
    },
  },
};
