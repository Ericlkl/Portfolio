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
    required: [true, 'Language is required'],
    trim: true
  },
  cover: {
    type: String,
    required: [true, 'Cover is required']
  },
  stacks: {
    type: [String],
    required: [true, 'Stacks are required']
  },
  logo: {
    type: String,
    required: [true, 'logo is required']
  },
  desc: {
    type: String,
    required: [true, 'Description is required']
  },
  platforms: {
    type: [String],
    required: [true, 'Platform is required']
  },
  repo: {
    type: String,
    required: [true, 'Repositry is required']
  },
  docker: {
    type: String,
    trim: true
  },
  download: {
    type: Object
  },
  intro: {
    type: String,
    required: true,
    trim: true
  },
  screenshots: {
    type: [String]
  },
  information: {
    type: Object,
    required: true
  }
});

export default mongoose.model('projects', ProjectSchema);
