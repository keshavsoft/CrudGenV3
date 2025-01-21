import express from 'express';
var router = express.Router();

import { putFunc } from "../../controllers/getFuncs/EntryFile.js";

router.put('/ItemsInOrder/:inRow/:inId/:inBranch', putFunc);


export { router };