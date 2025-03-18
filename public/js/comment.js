const express = require('express');
const router = express.Router();
const { Comments } = require('../models');  // Import the Sequelize model

// Handle POST request to add a comment
router.post('/', async (req, res) => {
    try {
        const { name, text } = req.body;  // Get form data

        // Save to database
        await Comments.create({ name, text });

        // Redirect back to the page (so it reloads with new comment)
        res.redirect('/comments');
    } catch (error) {
        console.error('Error saving comment:', error);
        res.status(500).send('Error saving comment');
    }
});

// Fetch all comments and render them
router.get('/', async (req, res) => {
    try {
        const comments = await Comments.findAll();
        res.render('comments', { comments });  // Render the page with comments
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).send('Error fetching comments');
    }
});

module.exports = router;
