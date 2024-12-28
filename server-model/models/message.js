const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userinfo",
  },
  msg: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
