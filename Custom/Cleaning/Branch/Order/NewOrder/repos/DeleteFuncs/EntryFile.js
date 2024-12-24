import {
    mainTableDeleteFunc as mainTableDeleteFuncDal,
    addOnTableDeleteFunc as addOnTableDeleteFuncDal,
} from '../../dals/DeleteFuncs/EntryFile.js';

let mainTableDeleteFunc = ({ inId, inSubId, inBranch }) => {
    return mainTableDeleteFuncDal({ inId, inSubId, inBranch });
};
let addOnTableDeleteFunc = ({ inId, inBranch, inmainId }) => {
    return addOnTableDeleteFuncDal({ inId, inBranch, inmainId });
};

export {
    mainTableDeleteFunc, addOnTableDeleteFunc
};