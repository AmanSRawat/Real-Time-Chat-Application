import express from 'express'
import { createConversation, getConversation, getMessage, sendMessage } from '../controllers/messageController.js'

const messageRoutes =  express.Router()

messageRoutes.post('/conversation',createConversation)
messageRoutes.get('/conversation/:id',getConversation)
messageRoutes.post('/message',sendMessage)
messageRoutes.get('/message/:conversationId',getMessage)

export default messageRoutes