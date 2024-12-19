import express from 'express';

var router = express.Router();

import { router as Factory } from "./Factory/routes.js";

router.use('/Today', Today);

export { router };