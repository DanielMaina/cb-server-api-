import { Document, Schema } from 'mongoose'
import { Request } from 'express'

export interface IUser extends Document{
  name: string
  account: string
  password: string
  avatar: string
  role: string
  type: string
  _doc: object
}


export interface INewUser {
  name: string
  account: string
  password: string
}

export interface IDecodedToken {
  id?: string
  newUser?: INewUser
  iat: number
  exp: number
}

export interface IGgPayload {
  email: string
  email_verified: boolean
  name: string
  picture: string
}

export interface IUserParams {
  name: string 
  account: string 
  password: string
  avatar?: string
  type: string
}

export interface IReqAuth extends Request {
  user?: IUser
}

export interface IEvents extends Document{
  eventName: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: any
  notes: string
  createdBy: Schema.Types.ObjectId,
  userId: Schema.Types.ObjectId,
  _doc: object
}

export interface IProfile extends Document{
  firstName: string,
  lastName: string,
  location: any,
  aboutYou: string,
  unionMember: boolean,
  volunteerWork: boolean,
  covidVaccinated: boolean,
  demoReel: string,
  portfolioUpload: string,
  imdbProfile: string,
  instagramAccount: string,
  userId: Schema.Types.ObjectId,
  _doc: object
}