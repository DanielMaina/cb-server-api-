import mongoose from 'mongoose'
import { IProfile } from '../config/interface'

const profileModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add your first name"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "Please add your last name"],
    trim: true
  },
  location: {
    type: Object
  },
  aboutYou: {
    type: String,
    trim: true
  },
  unionMember: {
    type: Boolean,
    trim: true
  },
  volunteerWork: {
    type: Boolean,
    trim: true
  },
  covidVaccinated: {
    type: Boolean,
    trim: true
  },
  demoReel: {
    type: String,
    trim: true
  },
  portfolioUpload: {
    type: String,
    trim: true
  },
  imdbProfile: {
    type: String,
    trim: true
  },
  instagramAccount: {
    type: String,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
})

export default mongoose.model<IProfile>('Profiles', profileModel)