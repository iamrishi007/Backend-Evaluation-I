const mongoose = require("mongoose")
const AuthorSchema = mongoose.Schema({
    name:{type:String , required:true},
    biography:{type:String},
    dataOfBirth:{type:String},
    nationality:{type:String},
    books:{type:mongoose.Schema.Types.ObjectId , ref:"book"
    }
})

module.exports = mongoose.model("author" , AuthorSchema)