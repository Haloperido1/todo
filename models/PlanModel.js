const {Schema, model} = require('mongoose');

const planSchema = new Schema({
    topic: {
        type:String,
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    subtitles: [{
        type: Schema.Types.ObjectId,
        ref: "JSPlanSubtitle"
    }]
})


const subtitleSchema = new Schema({
    subtitle: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
})
const JSPlanTitle = model('JSPlanTitle', planSchema);
const JSPlanSubtitle = model('JSPlanSubtitle', subtitleSchema);
module.exports = { JSPlanTitle,  JSPlanSubtitle};