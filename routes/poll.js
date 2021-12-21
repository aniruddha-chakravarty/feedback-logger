const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');



const keys = require('../config/keys');



router.get('/', (req, res) => {
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
  const newVote = {
    feedback: req.body.feedback,
    points: 1
  };

  //feedback-poll is the channel, feedback-vote is the event

  new Vote(newVote).save().then(vote => {
    // pusher.trigger('feedback-poll', 'feedback-vote', {
    //   points: parseInt(vote.points),
    //   feedback: vote.feedback
    // });

    return res.json({ success: true, message: 'Thank you for voting' });
  });
});

module.exports = router;
