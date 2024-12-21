import { StartFunc as RowAlterbyPk } from '../../kLowDb/Alter/RowAlterbyPk.js';

let AlterFunc = ({ inId }) => {
    return RowAlterbyPk({ inId });
};

export { AlterFunc };