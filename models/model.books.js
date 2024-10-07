const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
     title: { type: String, required: true },
     isbn: { type: String, require: true, unique: true },
     summary: { type: String },
     publicationDate: { type: Date },
     copiesAvaiable: { type: Number, default: 1 },
     author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
     borrowdby: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("book", BookSchema)