import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';

let GetAllFuncs = ({ inBranch }) => {
    return TodayAllQrCodes({ inBranch });
};

export {
    GetAllFuncs
};