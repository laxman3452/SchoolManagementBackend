const homeworkSchema = new mongoose.Schema({
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
    subject: String,
    title: String,
    description: String,
    dueDate: Date,
    attachments: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, { timestamps: true });

  const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;