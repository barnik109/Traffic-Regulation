// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const sepolia = require('sepolia');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Use the provided PORT from environment or default to 3001

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Create a schema for violations
const violationSchema = new mongoose.Schema({
    drivingLicenseNumber: { type: String, required: true },
    violationDate: { type: Date, default: Date.now },
    violationType: { type: String, required: true },
    demeritPoints: { type: Number, required: true },
});

// Create a schema for users
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    vehiclePlateNumber: { type: String },
    vehicleMake: { type: String },
    vehicleModel: { type: String },
    vehicleYear: { type: String },
    phoneNumber: { type: String, required: true },
    alternateEmail: { type: String },
    termsAgreement: { type: Boolean, default: false }
});

// Create a schema for traffic officers
const officerSchema = new mongoose.Schema({
    badgeNumber: { type: String, required: true },
    department: { type: String, required: true },
    password: { type: String, required: true }
});

// Create models based on the schemas
const UserModel = mongoose.model('User', userSchema);
const ViolationModel = mongoose.model('Violation', violationSchema);
const OfficerModel = mongoose.model('Officer', officerSchema);

app.use(cors());
app.use(bodyParser.json());

// Middleware for traffic officer authentication
const authenticateOfficer = (req, res, next) => {
    // Implement your authentication logic for traffic officers here
    // For example, you can check if the request contains a valid traffic officer token
    const isOfficerAuthenticated = true; // Example: Implement your authentication logic here
    if (isOfficerAuthenticated) {
        next(); // Move to the next middleware or route handler
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized access' });
    }
};

// Endpoint to submit violation details (accessible to traffic officers only)
app.post('/submit-violation', authenticateOfficer, async (req, res) => {
    const violationDetails = req.body;

    try {
        // Insert violation details into the database
        const result = await ViolationModel.create(violationDetails);
        await sepolia.storeReference('violations', violation._id.toString());

        res.json({ success: true, message: 'Violation details submitted successfully', result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to submit violation details' });
    }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user with the provided username
        const user = await UserModel.findOne({ username });

        // Check if the user exists and the password matches
        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // If the username and password are correct, return a success message
        res.json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while logging in' });
    }
});


// Endpoint to check violations (accessible to users)
app.get('/check-violations/:licenseNumber', async (req, res) => {
    const { licenseNumber } = req.params;

    try {
        // Find violations with the provided license number
        const violations = await ViolationModel.find({ drivingLicenseNumber: licenseNumber });

        res.json({ success: true, violations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to retrieve violation details' });
    }
});

// Endpoint for user registration
app.post('/register/user', async (req, res) => {
    const userData = req.body;

    try {
        // Check if the email already exists
        const existingUser = await UserModel.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Insert user details into the database
        const result = await UserModel.create(userData);

        res.json({ success: true, message: 'User registered successfully', result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to register user' });
    }
});

// Endpoint for traffic officer registration
app.post('/register/officer', async (req, res) => {
    const officerData = req.body;

    try {
        // Check if the badge number already exists
        const existingOfficer = await OfficerModel.findOne({ badgeNumber: officerData.badgeNumber });
        if (existingOfficer) {
            return res.status(400).json({ success: false, message: 'Badge number already exists' });
        }

        // Insert officer details into the database
        const result = await OfficerModel.create(officerData);

        res.json({ success: true, message: 'Officer registered successfully', result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to register officer' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
