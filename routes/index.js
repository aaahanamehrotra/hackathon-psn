const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
const {authPhy, authMath, authMentor, authEconomics, authAccountancy, authEnglish, authGeography, authChemistry, authBiology} = require('../config/manageroles')
const SpecificPost = require("../models/SpecificPost");

router.get('/', (req, res) => res.render('dashboard', { user: req.user }));
router.get('/specific', ensureAuthenticated, (req, res) => res.render('specific', { user: req.user }));
// router.get('/physics', ensureAuthenticated, authPhy, (req, res) => res.render('physics', { user: req.user }));
router.get('/mathematics', ensureAuthenticated, authMath, async(req, res) => { 
        try{
            let posts = await SpecificPost.find();
            const x = posts
            res.render('subject', { user: req.user, data:x, subject:"mathematics" })
        }catch(err){
            res.status(500).json(err);
        }
});
router.get('/physics', ensureAuthenticated, authPhy, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"physics" })
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/economics', ensureAuthenticated, authEconomics, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"economics" })
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/accountancy', ensureAuthenticated, authAccountancy, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"accountancy" })
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/english', ensureAuthenticated, authEnglish, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"english" })
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/geography', ensureAuthenticated, authGeography, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"geography" })
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/chemistry', ensureAuthenticated, authChemistry, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"chemistry" })
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/biology', ensureAuthenticated, authBiology, async(req, res) => { 
    try{
        let posts = await SpecificPost.find();
        const x = posts
        res.render('subject', { user: req.user, data:x, subject:"biology" })
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/map', (req, res) => res.render('map'));
router.get('/plastic', (req, res) => res.render('plastic'));
router.get('/marine', (req, res) => res.render('marine'));
router.get('/oilspill', (req, res) => res.render('oilspill'));
router.get('/about', (req, res) => res.render('about'));
router.get('/posts/create', ensureAuthenticated, (req, res) => res.render('create', { user: req.user }));
router.get('/profile', ensureAuthenticated, (req, res) => res.render('profile', { user: req.user }));
router.get('/createcontent', ensureAuthenticated, authMentor, (req, res) => res.render('createcontent', {user: req.user}))
router.get('/updateprofile', ensureAuthenticated, (req, res) => res.render('updateprofile', { user: req.user }))
router.get('/accessdenied', (req, res) => res.render('accessdenied'))
module.exports = router;




