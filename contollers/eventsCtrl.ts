import { Request, Response } from "express";
import Events from "../models/eventsModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  generateActiveToken,
  generateAccessToken,
  generateRefreshToken,
} from "../config/generateToken";
import sendMail from "../config/sendMail";
import { validateEmail, validPhone } from "../middleware/valid";
import { sendSms, smsOTP, smsVerify } from "../config/sendSMS";
import {
  IDecodedToken,
  IUser,
  IGgPayload,
  IUserParams,
} from "../config/interface";

import { OAuth2Client } from "google-auth-library";
// import fetch from 'node-fetch'

const client = new OAuth2Client(`${process.env.MAIL_CLIENT_ID}`);
const CLIENT_URL = `${process.env.BASE_URL}`;


export const getEventsByUserId = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params
    const {startDate,startTime,endDate,endTime, createdBy} = req.query
    // console.log(req.query)

    const events = await Events.find({ userId, }) || []
    return res.json({ data: events });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateEventsById = async (req: Request, res: Response) => {
  try {
    return
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const deleteEventsById = async (req: Request, res: Response) => {
  try {
    return 
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const createEvents = async (req: Request, res: Response) => {
  try {
    const {
      eventName,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      notes,
      createdBy,
      userId,
    } = req.body;

    const newEvent = new Events({
      eventName: eventName,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      location: location,
      notes: notes,
      createdBy: createdBy,
      userId: userId,
    });
    // console.log(newEvent)
    if (!newEvent)
      return res
        .status(400)
        .json({ msg: "opps" });
        await newEvent.save()
    return res
      .status(200)
      .json(newEvent);
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

//comment
