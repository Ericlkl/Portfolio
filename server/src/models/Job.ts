import mongoose, { Schema } from 'mongoose';

const JobSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required !'],
    trim: true
  },
  email: {
    type: String,
    require: [true, 'Email is required !']
  },
  content: {
    type: String,
    require: [true, 'Content is required !']
  }
});

export default mongoose.model('jobs', JobSchema);
