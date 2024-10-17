const mongoose = require("mongoose");

const UserSchema = require("../Schemas/UserSchema");

const UserModal = mongoose.model("User", UserSchema);

module.exports = UserModal ;
