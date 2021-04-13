const Video = require("../../models/Video");
const s3 = require("../../middleware/aws-file-upload");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

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
    singleUploadLocal: async (_, args) => {
      return processUpload(args.file);
    },
    singleUploadS3: async (_, args) => {
      return processUploadS3(args.file);
    },
  },
};

const processUpload = async (file) => {
  const { createReadStream, mimetype, encoding, filename } = await file;
  let path = "uploads/" + uuidv4() + filename;
  let stream = createReadStream();
  return new Promise((resolve, reject) => {
    stream
      .pipe(fs.createWriteStream(path))
      .on("finish", () => {
        resolve({
          success: true,
          message: "Successfully uploaded",
          mimetype,
          filename,
          encoding,
          location: path,
        });
      })
      .on("error", (error) => {
        console.log("Error evemt emitted");
        reject({
          success: false,
          message: "Failure",
        });
      });
  });
};

const processUploadS3 = async (file) => {
  const { createReadStram, mimetype, encoding, filename } = await file;
  let stream = createReadStram();

  const { Location } = await s3
    .upload({
      Body: stream,
      Key: `${uuidv4()}${filename}`,
      ContentType: mimetype,
    })
    .promise();

  return new Promise((resolve, reject) => {
    if (Location) {
      resolve({
        success: true,
        message: "Uploaded",
        mimetype,
        filename,
        location: Location,
        encoding,
      });
    } else {
      reject({
        success: false,
        messaage: "Failed",
      });
    }
  });
};
