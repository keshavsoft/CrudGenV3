import express from 'express';
var router = express.Router();

import { GetFunc,GetOrderShowFunc } from "../../controllers/getFuncs/EntryFile.js";

router.get('/MaxRow/:inBranch', GetFunc);
router.get('/RowData/:inRow/:inBranch', GetOrderShowFunc);


export { router };