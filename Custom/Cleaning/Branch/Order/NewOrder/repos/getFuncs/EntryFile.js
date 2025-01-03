import {
    GetFunc as GetFuncDal,
    GetOrderShowFunc as GetOrderShowFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {
    return GetOrderShowFuncDal({ inBranch, inRow });
};

export { GetFunc, GetOrderShowFunc };