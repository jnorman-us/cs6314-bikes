import { check } from "express-validator";

import { getModel } from "../schema.js";
import skillAlreadyExists from "../validators/already-exists.js";

export const createSkillRules = [
    check('name').isLength({
        min: 1,
        max: 25,
    }).custom(skillAlreadyExists),
    check('icon').isLength({
        min: 1,
        max: 25,
    }),
];
export async function createSkill(req, res) {
    const Skills = getModel();

    try {
        const { name, icon } = req.body;
        const skill = new Skills({
            name: name,
            icon: icon,
        });
        await skill.save();

        return res.status(200).json({
            skill,
        });
    } catch(err) {
        return res.status(500).send();
    }
}