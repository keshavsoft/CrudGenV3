import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranchName }) => {
    let LocalQrCodeData = buildData();

    LocalQrCodeData = LocalQrCodeData.filter(element => {
        return element.BranchName === inBranchName && element.F_F_Entry_Return_Scan === true || element.F_F_Pressing_Return_Scan === true || element.F_F_Completion_Scan === true;
    });

    return LocalQrCodeData.slice().reverse();
    // return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
