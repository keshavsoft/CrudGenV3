import express from 'express';

var router = express.Router();

import { mainTableDeleteFunc, addOnTableDeleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/mainTable/:inBranch/:Id', mainTableDeleteFunc);
router.delete('/addOnTable/:inBranch/:mainId/:Id', addOnTableDeleteFunc);

export { router };