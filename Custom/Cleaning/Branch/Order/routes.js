import express from 'express';
var router = express.Router();

import { router as NewOrder } from './NewOrder/routes.js';
import { router as Delivery } from './Delivery/routes.js';
import { router as SubTable } from './SubTable/routes.js';

router.use('/NewOrder', NewOrder);
router.use('/Delivery', Delivery);
router.use('/SubTable', SubTable);

export { router };