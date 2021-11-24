const {Router} = require('express');
const {JSPlanTitle, JSPlanSubtitle} = require('../models/PlanModel')
const router = Router();
router.get('/createJS', async (req,res) => {

    await JSPlanSubtitle.create({
        subtitle: "Comparisons",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Variables and constants",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Operators",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Loops and Conditions",
        completed: true
    });
    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Language Fundamentals",
        subtitles:
            await JSPlanSubtitle.find()
    });
    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //
    await JSPlanSubtitle.create({
        subtitle: "Data Types",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Type Casting",
        completed: true
    });
    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Type System",
        subtitles:
            await JSPlanSubtitle.find({completed: true})

    });
    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //
    await JSPlanSubtitle.create({
        subtitle: "Scopes",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Lexical Environment",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Hoisting",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Closure",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Arrow functions",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Expression and Declaration",
        completed: true
    });

    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Scopes, Closures and Functions",
        subtitles:
            await JSPlanSubtitle.find({completed: true})
    });
    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //
    await JSPlanSubtitle.create({
        subtitle: "Proto and function.prototype",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Chain",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Inheritance",
        completed: true
    });

    await JSPlanSubtitle.create({
        subtitle: "instanceof",
        completed: true
    });

    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Prototypes",
        subtitles:
            await JSPlanSubtitle.find({completed: true})
    });
    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //
    await JSPlanSubtitle.create({
        subtitle: "Inheritance",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Static properties and methods",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Private and protected properties and methods",
        completed: true
    });
    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Classes",
        subtitles:
            await JSPlanSubtitle.find({completed: true})
    });

    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //

    await JSPlanSubtitle.create({
        subtitle: "Function object",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Object methods and 'this'",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Constructor, operator 'new'",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Global object",
        completed: true
    });

    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Object Instantiation",
        subtitles:
            await JSPlanSubtitle.find({completed: true})
    });
    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //

    await JSPlanSubtitle.create({
        subtitle: "Callbacks",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "async/await",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "Promises",
        completed: true
    });
    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Approaches",
        subtitles:
            await JSPlanSubtitle.find({completed: true})
    });
    //
    await JSPlanSubtitle.updateMany({}, {completed: false})
    //

    await JSPlanSubtitle.create({
        subtitle: "setTimeout",
        completed: true
    });
    await JSPlanSubtitle.create({
        subtitle: "setInterval",
        completed: true
    });

    await JSPlanTitle.create({
        topic: "JS Fundamentals tutorial (Stage 1)",
        title: "Scheduling",
        subtitles:
            await JSPlanSubtitle.find({completed: true})
    });


    res.json({
        JStest: await JSPlanTitle.find(),
        JStestWithSub: await JSPlanTitle.find().populate('subtitles'),
        JSsub: await JSPlanSubtitle.find()

    });
})


module.exports = router;