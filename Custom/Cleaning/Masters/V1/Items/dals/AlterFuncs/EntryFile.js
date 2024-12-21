import { StartFunc as RowAlterbyPk } from '../../kLowDb/Alter/RowDeletebyPk.js';

let AlterFunc = ({ inId }) => {
    return RowAlterbyPk({inId});
};

export { AlterFunc };