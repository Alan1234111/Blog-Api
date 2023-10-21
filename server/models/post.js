const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {type: String, required: true},
    content: {type: String, required: true},
    tag: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment", required: true}],
  },
  {timestamps: true}
);

PostSchema.virtual("url").get(function () {
  return `/posts/${this._id}`;
});

module.exports = mongoose.model("Post", PostSchema);
