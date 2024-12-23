import {
    mainTableDeleteFunc as mainTableDeleteFuncDal,
    addOnTableDeleteFunc as addOnTableDeleteFuncDal,
} from '../../dals/DeleteFuncs/EntryFile.js';

let mainTableDeleteFunc = ({ inId,inBranch}) => {
    return mainTableDeleteFuncDal({ inId,inBranch });
};
let addOnTableDeleteFunc = ({ inId,inBranch,inmainId}) => {
    return addOnTableDeleteFuncDal({ inId,inBranch,inmainId });
};

export {
    mainTableDeleteFunc,addOnTableDeleteFunc
};