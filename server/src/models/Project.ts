import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true,
    unique: true
  },
  language: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true
  },
  logo: {
    type: String,
    required: [true, 'logo is required']
  },
  cover: {
    type: String,
    required: [true, 'Cover is required']
  },
  stacks: {
    type: [String],
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  repo: {
    type: String,
    required: true
  },
  docker: {
    type: String
  },
  download: {
    type: String
  },
  screenshots: {
    type: [String]
  },
  information: {
    type: Object
  }
});

export default mongoose.model('projects', ProjectSchema);
