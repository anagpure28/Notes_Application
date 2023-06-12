const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    user: String,
    title: String,
    body: String,
    userID: String,
    category: String
},{
    versionKey: false
})

const NoteModel = mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}