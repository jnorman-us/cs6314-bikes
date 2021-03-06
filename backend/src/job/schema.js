import mongoose from "mongoose";
import {UserSchema} from "../users/schema.js";
import {TechnicianSchema} from "../technicians/schema.js";
import {SkillSchema} from "../skills/schema.js";

export const JobSchema = new mongoose.Schema({
    requestor: UserSchema,
    technician: TechnicianSchema,
    title: String,
    description: String,
    tags: [ SkillSchema ],

    // decided together
    messages: {
        type: [{
            user: mongoose.Schema.Types.ObjectId,
            text: String,
        }],
        index: false,
    },
    time: Date,
    price: Number,
    accepted: Boolean,
    canceled: Boolean,
    finished: Boolean,
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
JobSchema.index({ "requestor._id": 1, });
JobSchema.index({ "technician.userID": 1, });

JobSchema.virtual('isFinalized').get(function() {
    if(this.price && this.accepted) {
        return true;
    }
    return false;
});

let model = null;

export function initModel(connection) {
    model = connection.model("Job", JobSchema);
}

export function getJobModel() {
    return model;
}