import express from 'express'
import auth from '../middleware/auth'

import { createProfile, getProfileByUserId, updateProfileById, deleteProfileById } from '../contollers/profileCtrl'

const router = express.Router()

router.post('/profile', auth, createProfile)

router.get('/profile/:userId', auth, getProfileByUserId)

router.put('/profile/:profileId', auth, updateProfileById)

router.delete('/profile/:profileId', auth, deleteProfileById)




export default router;