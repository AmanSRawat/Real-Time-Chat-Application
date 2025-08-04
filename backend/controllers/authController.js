import Users from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export async function register  (req,res){
    try {
        const {username,email,password} = req.body
        const saltRounds = 10

        if(!username || !email || !password){
            return res.status(400).send('All fields are required!')
        }

        const isAlreadyExisits = await Users.findOne({email:email})

        if(isAlreadyExisits) 
            return res.status(400).send('Users already exists')

        const hashedPassword = await bcrypt.hash(password,saltRounds)

        const newUser = new Users({
            username:username, 
            email: email,
            password:hashedPassword
        })

        const saveUser = await newUser.save()

        return res.status(201).json(saveUser);
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error.message})
    }
}

export async function signin(req,res){
    try {
        const {email, password} =  req.body
        if(!email || !password){
            return res.status(400).json({error: ' '})
        }
        const user = await Users.findOne({email: email})
        if(!user){
            return res.status(401).json({error: 'Invalid username or password!'})
        }
        const validate = await bcrypt.compare(password,user.password)
 
        if(!validate){
            return res.status(401).json({error: 'Invalid uername or password!'})
        }

        const token = jwt.sign({email:user.email},'secret',{expiresIn: 84600})
        return res.status(200).json({token})

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error.message})
    }
}
