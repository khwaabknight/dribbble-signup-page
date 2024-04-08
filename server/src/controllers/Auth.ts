import { Request, Response } from "express"
import User from "../models/User"
import { uploadFile } from "../utils/uploadFileToCloudinary"



const generateAccessAndRefereshTokens = async(userId : string) =>{
    try {
        const user = await User.findById(userId)

        if (!user) {
            return null
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        console.log(error);
        return null
    }
}

const registerUser = async (req : Request, res : Response) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // upload image to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const { name, email, username, password, location, accountType } = req.body;
    const file = req.files ? (Array.isArray(req.files.image) ? req.files.image[0] : req.files.image) : null;
    console.log(req.body);
    console.log(file);

    if ([ name, email, username, password, location, accountType ].some((field) => field?.trim() === "")) {
        return res.status(400).json({ message: "All fields are required" })
    }
    if(!file){
        return res.status(400).json({ message: "Image is required" })
    }

    

    try {
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })
    
        if (existedUser) {
            return res.status(409).json({ message: "User with email or username already exists" })
        }

        const imageResponse = await uploadFile(file);
        if(!imageResponse) return res.status(500).json({message : "Error in uploading image"});
        const {url,fileId} = imageResponse;

        const newUser = await User.create({
            name,
            email,
            username,
            password,
            avatar: url,
            location,
            accountType,
            imageId: fileId
        })
        const createdUser = await User.findById(newUser._id).select(
            "-password -refreshToken"
        )
        if (!createdUser) {
            return res.status(500).json({ message: "Something went wrong while registering the user" })
        }
        return res.status(201).json({message: "User registered Successfully", user: createdUser})

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while registering the user" })
    }
}

const checkExistingUser = async (req : Request, res : Response) => {
    const { username, email } = req.body

    if (!username || !email) {
        return res.status(400).json({ message: "Username and email are required" })
    }

    try {
        const userWithUsername = await User.findOne({username})
        if (userWithUsername) {
            return res.status(409).json({ message: "Username already exists" })
        }
        const userWithEmail = await User.findOne({email})
        if (userWithEmail) {
            return res.status(409).json({ message: "Email already exists" })
        }
        return res.status(200).json({ message: "Username and email are is available" })
    } catch (error) {
        console.log("Something went wrong while checking the username : ", error);
        return res.status(500).json({ message: "Internal Server" })
    }
}

export {registerUser, checkExistingUser};