// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

// Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB connection string)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for violations
const violationSchema = new mongoose.Schema({
    drivingLicenseNumber: String,
    violationDate: String,
    violationType: String,
    demeritPoints: Number, // Add demeritPoints to the schema
});


// Create a schema for users
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create a model based on the schema
const UserModel = mongoose.model('User', userSchema);

// Create a model based on the schema
const ViolationModel = mongoose.model('Violation', violationSchema);

// Create a schema for traffic officers
const officerSchema = new mongoose.Schema({
    badgeNumber: String,
    department: String,
    password: String
});

// Create a model based on the schema
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

        res.json({ success: true, message: 'Violation details submitted successfully', result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to submit violation details' });
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
