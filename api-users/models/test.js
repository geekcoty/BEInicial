const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  testProperty: {
    type: String,
  },
  anotherProperty: {
    type: Number,
    required: true,
  },
  yetAnotherProperty: [],
});
module.exports = mongoose.model("Test", testSchema);
