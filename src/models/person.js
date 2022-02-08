const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   cpf: {
      type: Number,
      required: true,
   },
   email: {
      type: String,
      required: true,
      lowercase: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const Person = mongoose.model('person', modelSchema);
module.exports = Person;