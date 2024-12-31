import { StartFunc as BranchWise } from '../../kLowDb/ReadFromFile/BranchWise.js';

let GetAllFuncs = ({ inBranch, inFromDate, inToDate }) => {
    return BranchWise({ inBranch, inFromDate, inToDate });
};

let GetAsIsFuncs = () => {
    // return TodayAllQrCodes();
};

export {
    GetAllFuncs, GetAsIsFuncs
};