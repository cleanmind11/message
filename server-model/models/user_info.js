const mongooose = require("mongoose");

const UserInfoSchema = new mongooose.Schema({
  // _id: {
  //   type: Number,
  //   required: true,
  // },
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  // connectionstate: {
  //   type: Boolean,
  //   required: true
  // },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongooose.model("userinfo", UserInfoSchema)