const express = require('express');
const router = express.Router();
const { User } = require('../db');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid login details' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
});

module.exports = router;
