const {Router} = require('express');
const {JSTitle: PlanTitle, PlanSubtitle} = require('../models/PlanModel')
const router = Router();

router.get('/NodeBase', (req, res) => {
    res.render('NodePlan',
        {
            title: 'Node.js study plan',
            isNodeBase: true
        });
})

module.exports = router;