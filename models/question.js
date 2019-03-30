const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

var Question = mongoose.model("Question", questionSchema);

module.exports = Question;