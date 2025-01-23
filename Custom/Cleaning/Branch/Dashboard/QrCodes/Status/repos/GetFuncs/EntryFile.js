import {
    GetAllFuncs as GetAllFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetAllFuncsDal({ inBranch });
};

export {
    GetFuncs
};