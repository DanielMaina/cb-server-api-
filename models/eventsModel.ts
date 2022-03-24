import mongoose from 'mongoose'
import { IEvents } from '../config/interface'

const eventsModel = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Please add an event name"],
    trim: true
  },
  startDate: {
    type: String,
    required: [true, "Please add a start date"],
    trim: true
  },
  endDate: {
    type: String,
    trim: true
  },
  startTime: {
    type: String,
    required: [true, "Please add a start time"],
    trim: true
  },
  endTime: {
    type: String,
    trim: true
  },
  location: {
    type: Object
  },
  notes: {
    type: String,
    trim: true
  }, 
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
})

export default mongoose.model<IEvents>('Events', eventsModel)