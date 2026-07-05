import express from "express";
import { submitContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", getContacts); // simple listing for now — lock this down later with auth

export default router;
