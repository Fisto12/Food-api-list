import express from "express";
import { createFood, getFoodByTribe } from "../controller/food.js";
const router = express.Router();

router.post("/createFood", createFood);
router.get('/getFood',getFood)
router.get('/getFoodByTribe/:cat',getFoodByTribe)

export default router