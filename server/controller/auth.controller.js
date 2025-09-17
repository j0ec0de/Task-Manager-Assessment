import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


// cookie configuration

const getCookieOptions = () => ({
    expires: new Date(
        Date.now() + (process.env.JWT_COOKIE_EXPIRES || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
});



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

// user login function
export const userLogin = async(req, res) => {

    const { email, password } = req.body;
        
    try {

        // checks if the user exits or not in the db
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // checks if the credentials matches or not
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // set cookie and send response

        res.cookie('jwt', token, getCookieOptions());

        res.json({
            message: "Login successful",
            token, 
            user: {id: user._id, name: user.name, email: user.email} });

        console.log("Token is: "+token);
        console.log("user: "+user);
        console.log("user logged in successfully: ",user.email);

    
        
    } catch (error) {
        console.error("Error in logging in ",error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}