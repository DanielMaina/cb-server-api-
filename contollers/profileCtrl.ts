import { Request, Response } from "express";
import Profile from "../models/profileModel";

import { OAuth2Client } from "google-auth-library";
// import fetch from 'node-fetch'

const client = new OAuth2Client(`${process.env.MAIL_CLIENT_ID}`);
const CLIENT_URL = `${process.env.BASE_URL}`;


export const getProfileByUserId = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params
    const {startDate,startTime,endDate,endTime, createdBy} = req.query
    // console.log(req.query)

    const profile = await Profile.find({ userId, }) || []
    return res.json({ data: profile });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateProfileById = async (req: Request, res: Response) => {
  try {
    return
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const deleteProfileById = async (req: Request, res: Response) => {
  try {
    return 
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export const createProfile = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      location,
      aboutYou,
      unionMember,
      volunteerWork,
      covidVaccinated,
      demoReel,
      portfolioUpload,
      imdbProfile,
      instagramAccount,
      userId,
    } = req.body;

    const newProfile = new Profile({
      firstName: firstName,
      lastName: lastName,
      location: location,
      aboutYou: aboutYou,
      unionMember: unionMember,
      volunteerWork: volunteerWork,
      covidVaccinated: covidVaccinated,
      demoReel: demoReel,
      portfolioUpload: portfolioUpload,
      imdbProfile: imdbProfile,
      instagramAccount: instagramAccount,
      userId: userId,
    });
    // console.log(newEvent)
    if (!newProfile)
      return res
        .status(400)
        .json({ msg: "opps" });
        await newProfile.save()
    return res
      .status(200)
      .json(newProfile);
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

//comment
