const ShortUniqueId = require('short-unique-id')
const uid = new ShortUniqueId({ length: 8 });
const URL = require('../models/index')
// console.log(uid.rnd()); 

async function generateNewShortUrl(req, res){
    if(!req.body.url) return res.status(400).json({error: "url required "})
    const shortid = uid.rnd();
    await URL.create({
        shortId: shortid,
        redirectUrl: req.body.url,
        visHistory: [],
    });
    // console.log(req.body.url)

    // return res.json({id: shortid})

    return res.render('home', {
        id: shortid,
    });
}

async function handleUrlrequest(req, res){
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate({
                shortId
            },{
              $push:{
                visHistory: {
                    timestamp: Date.now(),
                },
            },
            }
        );
        console.log(entry.redirectUrl);
        res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOne({shortId});
    res.json({clicks:entry.visHistory.length, analytics: entry.visHistory});
}


module.exports = {
    generateNewShortUrl,
    handleUrlrequest,
    handleGetAnalytics
}