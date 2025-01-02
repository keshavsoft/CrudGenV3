import express from 'express';

var router = express.Router();

import { mainTableDeleteFunc, addOnTableDeleteFunc } from '../../controllers/DeleteFuncs/EntryFile.js';

router.delete('/Item/:inBranch/:Id/:inSubId', mainTableDeleteFunc);
router.delete('/addOn/:inBranch/:mainId/:Id/:AddOnKey', addOnTableDeleteFunc);

export { router };