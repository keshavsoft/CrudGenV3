// import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/WithChecking/StartFunc.js';

let putFuncs = ({ inBranch,inId,inRow, inPutBody }) => {
    console.log("Chandana");    
    return EntryScan({ inBranch,inId,inRow, inDataToInsert: inPutBody });
};

export { putFuncs };