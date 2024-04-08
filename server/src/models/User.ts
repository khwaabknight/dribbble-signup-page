import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require('dotenv').config();

export type UserType = {
    name: string;
    email: string;
    username: string;
    password: string;
    avatar: string;
    imageId: string;
    location: string;
    accountType: string;
    refreshToken?: string;
    isPasswordCorrect: (password : string) => Promise<boolean>;
    generateAccessToken: () => string;
    generateRefreshToken: () => string;
}

const userSchema: Schema = new Schema<UserType>({
    name: { 
        type: String, 
        required: true 
    },
	username: { 
        type: String, 
        required: true,
        unique: true,
        index: true,
    },
    email : { 
        type: String, 
        required: true,
        unique: true,
        index: true,
    },
	password: { 
        type: String, 
        required: true 
    },
    avatar: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true,
        enum: ['DESIGNER', 'EMPLOYER', 'USER']
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password as string, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password : string){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET!,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET!,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model<UserType>("User", userSchema);
export default User;
