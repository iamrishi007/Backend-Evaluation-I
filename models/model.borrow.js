const mongoose = require("mongoose");
const BorrowSchema = mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
  member: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
  borrowDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: { type: Date },
  status: { type: String, enum: ["borrowed", "returned"], default: "borrowed" },

});

module.exports = mongoose.model("borrow", BorrowSchema)