const { model, Schema } = require("mongoose");

const videoSchema = new Schema({
  url: String,
  title: String,
  createdAt: String,
  lengthTime: String,
  description: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  dislikes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = model("Video", videoSchema);
