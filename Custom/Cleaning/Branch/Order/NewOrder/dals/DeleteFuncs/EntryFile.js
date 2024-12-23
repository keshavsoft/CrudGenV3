// import { StartFunc as RowDeletebyPk } from '../../kLowDb/Delete/RowDeletebyPk.js';

let mainTableDeleteFunc = ({ inId, inBranch }) => {

    return { inId, inBranch };
};
let addOnTableDeleteFunc = ({ inId, inBranch, inmainId }) => {

    return { inId, inBranch, inmainId };
};

export { mainTableDeleteFunc, addOnTableDeleteFunc };