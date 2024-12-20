const studentSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    schoolCode: {
      type: String,
      required: true,
      index: true
    },
    class: {
      type: String,
      required: true
    },
    section: String,
    rollNumber: String,
    parentName: String,
    parentContact: String,
    address: String
  });

  const Student = mongoose.model('Student', studentSchema);

module.exports = Student;