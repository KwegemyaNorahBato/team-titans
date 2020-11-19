const mongoose = require('mongoose'); // Importing mongoose

//create a schema 

const apiSchema = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String},
    created_at:{type: Date, default: Date.now}
});

//Export the model
const Info = module.exports = mongoose.model("Info", apiSchema);
//This will avaoid repetition and timeout if limit in the schema is reached
module.exports.get = function(callback, limit){
    Info.find(callback).limit(limit);
}