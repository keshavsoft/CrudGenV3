import { StartFunc as ReadFromFile } from '../../kLowDb/ReadFromFile/getFunc.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';
import { StartFunc as getRowFunc } from '../../kLowDb/ReadFromFile/getRowFunc.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = getRowFunc();

    return LocalFromLowDb;
};

let GetDataCountFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = getRowFunc({ inKey, inValue });

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetDataCountFunc
};