//Class variables
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

//Student schema
var studentSchema = new Schema({
	firstName: String,
	lastName: String,
	phone: Number,
	courseIDs: [String],
	assigmentIDs: [String],
	semesterIDs: [String],
	comments: [String]
});

//Export the model
var Student = mongoose.model('Student', studentSchema);
module.exports = Student;