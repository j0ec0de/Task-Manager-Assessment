import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


// cookie configuration
/*
const getCookieOptions = () => ({
    expires: new Date(
        Date.now() + (process.env.JWT_COOKIE_EXPIRES || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
});
*/


// to create user/ register / sign up

export const createUser = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        // defines a constant ,and checks through the db if email exits or not.
        const userExists = await User.findOne({ email });
        if(userExists) return res.status(400).json({ message: "User already exists" });

        // input validation
        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // bcrypt is used to hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // new user is created
        const user = new User({ name, email, password: hashedPassword });

        // saved to the db
        await user.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Erro in creating a user", error.message);
    }
}

