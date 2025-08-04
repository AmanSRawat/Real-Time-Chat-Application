import express from 'express'
import { createConversation, getConversation } from '../controllers/messageController.js'

const messageRoutes =  express.Router()

messageRoutes.post('/conversation',createConversation)
messageRoutes.get('/conversation/:id',getConversation)

export default messageRoutes