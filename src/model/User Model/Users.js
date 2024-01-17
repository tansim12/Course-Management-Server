const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    required: true,
  },
  image: {
    type: String,
  },
});

const User = model("User", UserSchema)
module.exports=User
