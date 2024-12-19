import express from 'express';

var router = express.Router();

import { router as AddOns } from "./AddOns/routes.js";

router.use('/AddOns', AddOns);

export { router };