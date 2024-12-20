import express from 'express';

var router = express.Router();

import {
    GetFunc, GetQrStatusFunc, GetRowDataFunc, GetAggregateFunc
}
    from '../../controllers/getFuncs/EntryFile.js';

router.get('/:inFactory', GetFunc);
router.get('/QrStatus/:inFactory', GetQrStatusFunc);
router.get('/RowData/:id', GetRowDataFunc);
router.get('/Aggregate/:id', GetAggregateFunc);


export { router };