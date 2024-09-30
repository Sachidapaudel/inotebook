const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_secret = "Heyiamsachid@a";

// ROUTE 1: Create a user using POST "/api/auth/createuser". No login required
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Error!! Sorry, a user with this email already exists" });
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const secretPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secretPass,
        });

        // Create JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_secret);

        // Returning the token
        res.json({ authToken });

    } catch (err) {
        if (err.code === 11000) { // MongoDB error code for duplicate key
            return res.status(400).json({ error: 'Email already exists' });
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    }
});

// ROUTE 2: Authenticate a user using POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Corrected syntax
    }

    const { email, password } = req.body;

    try {
        // Check if the user exists
        let user = await User.findOne({ email });  // Use await
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        // Compare the provided password with the hashed password
        const passwordCompare = await bcrypt.compare(password, user.password);  // Use await
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        // Create and sign the JWT token
        const payload = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(payload, JWT_secret);
        res.json({ authToken });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

//ROUTE 3: Get logged in user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', async (req, res) => {
    
try{
    userId = "todo";
    const user = await User.findById(userId).select("-password");

}catch{
    console.error(err);
    res.status(500).send('Server Error');

}
});

module.exports = router;
