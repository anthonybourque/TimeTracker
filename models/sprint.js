var mongoose = require("mongoose");
var PastSprint = new mongoose.Schema({
  name: String,
  duration: String,
  status: String,
  progress: String,
  description: String,
  notify: String,
  user: String,
  createdAt: String,
  startedAt: String,
  finishedAt: String
});
module.exports = mongoose.model("PastSprint", PastSprint);
