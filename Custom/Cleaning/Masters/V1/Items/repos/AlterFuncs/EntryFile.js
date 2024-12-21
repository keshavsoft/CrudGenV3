import {
    AlterFunc as AlterFuncDal,
} from '../../dals/AlterFuncs/EntryFile.js';

let AlterFunc = ({ inId }) => {
    return AlterFuncDal({ inId });
};

export {
    AlterFunc
};