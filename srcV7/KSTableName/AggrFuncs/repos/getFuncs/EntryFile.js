import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalForSequlize,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalForMongoDb,
    GetDataOnlyFunc as GetDataOnlyFuncDalsForMongoDb,
    GetLastRowFunc as GetLastRowFuncRepoForMongoDbDal
} from '../../dalsForMongoDb/getFuncs/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};

let GetFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetFuncDalForSequlize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetFuncDalForMongoDb();
    };

    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (ConfigJson.isSequelize) {
        return await GetDataOnlyFuncDalsForSequelize();
    };

    if (ConfigJson.isMongoDb) {
        return await GetDataOnlyFuncDalsForMongoDb();
    };

    return GetDataOnlyFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc
};