const express = require('express');
const router = express.Router();


// @route     GET api/contacts
// @desc        Get all user contacts
// @access      private
router.get('/', (req, res) => {
    res.send('Add contact');
});
// @route   POSTapi/contacts/:id
// @desc        Add new contact
// @access      private
router.post('/:id', (req, res) => {
    res.send('Add contact');
});

// @route      PUT api/contacts/:id
// @desc        updatecontact
// @access      private
router.put('/:id', (req, res) => {
    res.send('update contact');
});

// @route    DELETE api/contacts/:id
// @desc        Delete contact
// @access      private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});



module.exports = router;