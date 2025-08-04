// Removed unused 'Messages' import
import Conversation from "../models/Conversation.js";
import Users from '../models/User.js';

export async function createConversation(req, res) {
    try {
        const { senderId, receiverId } = req.body;

        if (!senderId || !receiverId) {
            return res.status(400).json({ message: "Sender and receiver IDs are required." });
        }

        const existingConversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (existingConversation) {
            return res.status(200).json(existingConversation);
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        const savedConversation = await newConversation.save();

        return res.status(201).json(savedConversation);

    } catch (error) {
        console.error("Error creating conversation:", error);
        return res.status(500).json({ message: "An internal server error occurred." });
    }
};


export async function getConversation(req,res){
    try {
        const userId = req.params.userId;
        const conversation = await Conversation.find({members: {$in: [userId]}})
        const conversationUserData = Promise.all(conversation.map(async (conversation)=>{
            const receiverId = conversation.members.find((member)=>member !== userId)
            const user =  await Users.findById(receiverId)
            return {user: {email:user.email, username: user.username}, conversationId: conversation._id}
        }))
        return res.status(200).json(await conversationUserData)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error.message})
    }
}