const mongo = require("mongoose");
const { Schema } = mongo;
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    roll: Number,
    isLoged : Boolean
})

module.exports = {
    userSchema : mongo.model("user",userSchema)
}
// mongo ke  model me collection name or jo scheema dena he wo dena hey
 // singuler name rakhna hey collection ka or us collection 
 // ko schema de dena hey,jo ke 