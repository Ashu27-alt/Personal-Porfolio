import { getProfile, createProfile, addExperince, addSocial, updateExperience, updateSocial, updateEducation, deleteExperience, deleteSocial, deleteEducation,addEducation } from "../Controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getProfile);
router.route("/create").post(createProfile);
router.route("/add-Experience").post(addExperince);
router.route("/add-Social").post(addSocial);
router.route("/add-Education").post(addEducation);
router.route("/update-Experience").patch(updateExperience);
router.route("/update-Social").patch(updateSocial);
router.route("/update-Education").patch(updateEducation);
router.route("/delete-Experience").delete(deleteExperience);
router.route("/delete-Social").delete(deleteSocial);
router.route("/delete-Education").delete(deleteEducation);

export default router;