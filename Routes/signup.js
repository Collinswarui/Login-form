const express = require('express');
const router = express.Router();
const { User } = require('../db');

router.post('/', async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;
  
    try {
      const userExists = await User.exists({ email });
      if (userExists) {
        return res.status(409).json({ error: 'User already exists' });
      }
  
      const newUser = await User.create({
        firstname,
        lastname,
        username,
        email,
        password,
      });
  
      return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  });
  
  module.exports = router;