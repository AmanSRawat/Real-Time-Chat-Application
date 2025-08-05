import Messages from '../models/Messages.js';
import Conversation from '../models/Conversation.js';
import Users from '../models/User.js';

// CREATE CONVERSATION
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

// GET CONVERSATIONS OF A USER
export async function getConversation(req, res) {
    try {
        const userId = req.params.userId;

        const conversations = await Conversation.find({
            members: { $in: [userId] }
        });

        const conversationUserData = await Promise.all(conversations.map(async (conversation) => {
            const receiverId = conversation.members.find((member) => member !== userId);
            const user = await Users.findById(receiverId);

            return {
                user: user ? { email: user.email, username: user.username } : { email: null, username: "Unknown User" },
                conversationId: conversation._id
            };
        }));

        return res.status(200).json(conversationUserData);

    } catch (error) {
        console.error("Error fetching conversations:", error);
        return res.status(500).json({ message: error.message });
    }
}

// SEND MESSAGE
export async function sendMessage(req, res) {
    try {
        const { conversationId, senderId, message } = req.body;

        if (!conversationId || !senderId || !message) {
            return res.status(400).json({ message: "conversationId, senderId, and message are required." });
        }

        const newMessage = new Messages({ conversationId, senderId, message });
        const messageSent = await newMessage.save();

        return res.status(200).json({ message: messageSent });

    } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).json({ message: error.message });
    }
}

// GET MESSAGES OF A CONVERSATION
export async function getMessage(req, res) {
    try {
        const conversationId = req.params.conversationId;

         if (!conversationId ) {
            return res.status(400).json({  });
        }
        const messages = await Messages.find({ conversationId }).sort({ createdAt: 1 });

        const messageUserData = await Promise.all(messages.map(async (message) => {
            const user = await Users.findById(message.senderId);

            return {
                user: user ? { email: user.email, username: user.username } : { email: null, username: "Unknown User" },
                message: message.message
            };
        }));

        return res.status(200).json(messageUserData);

    } catch (error) {
        console.error("Error fetching messages:", error);
        return res.status(500).json({ message: error.message });
    }
}
