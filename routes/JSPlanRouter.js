const {Router} = require('express');
const {JSPlanTitle} = require('../models/PlanModel')
const router = Router();

router.route('/jsplan')
    .get(async (req, res) => {
        const JSPlan = await JSPlanTitle.find({}).lean().populate('subtitles');
        res.render('JSPlan',
            {
                title: 'JS study plan',
                isJSBase: true,
                JSPlan
            });
    })
    .post(async (req, res) => {
        console.log(req.body);
        const jsPlan = await JSPlanTitle.find({}).populate('subtitles');
        await jsPlan.forEach(title => {
            title.completed = !!req.body[title._id];
            if (title.subtitles !== null) {
                title.subtitles.forEach(subtitle => {
                    subtitle.completed = !!req.body[subtitle.id];
                    subtitle.save();
                })
            }
            title.save();
        })
        res.redirect('/jsplan')
    })

    .put((req, res) => {
        res.statusCode = 403
        res.end('Put operation not supported on /jsplan');
    })
    .delete((req, res) => {
        res.statusCode = 403
        res.end('Delete operation not supported on /jsplan');
    })


module.exports = router;