import express from 'express'
import auth from '../middleware/auth'
import {createEvents, deleteEventsById, getEventsByUserId, updateEventsById} from '../contollers/eventsCtrl'

const router = express.Router()

router.post('/events', auth, createEvents)

router.get('/events/:userId', auth, getEventsByUserId)

router.put('/events/:eventId', auth, updateEventsById)

router.delete('/events/:eventId', auth, deleteEventsById)




export default router;