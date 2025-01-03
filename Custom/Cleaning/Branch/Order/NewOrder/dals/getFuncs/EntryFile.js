import { StartFunc as MaxRow } from '../../kLowDb/ReadFile/MaxRow.js';
import { StartFunc as inRowOrder } from '../../kLowDb/ReadFile/inRow.js';

let GetFunc = ({ inBranch }) => {

    let LocalFromLowDb = MaxRow({ inBranch });

    return LocalFromLowDb;
};

let GetOrderShowFunc = ({ inBranch, inRow }) => {

    let LocalFromLowDb = inRowOrder({ inBranch, inRow });

    return LocalFromLowDb;
};

export { GetFunc, GetOrderShowFunc };