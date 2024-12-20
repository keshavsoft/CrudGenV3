import express from 'express';

var router = express.Router();

import { router as AddOns } from "./AddOns/routes.js";
import { router as Items} from "./Items/routes.js";

router.use('/AddOns', AddOns);
router.use('/Items', Items);

export { router };