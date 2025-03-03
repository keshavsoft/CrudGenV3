import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";
import { StartFunc as CheckWashingScan } from "./Check/WashingScan.js";

let StartFunc = ({ inFactory, inDataInsert, inVoucherRef, inQrCodeId }) => {

    let LocalTable = inFactory;
    let LocalQrId = inQrCodeId;
    let LocalVoucherRef = inVoucherRef;
    let LocalDataInsert = inDataInsert;
    let LocalBranchName = LocalDataInsert?.BranchName;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId, inBranch: LocalBranchName });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalCheckWashingScan = CheckWashingScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckWashingScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckWashingScan.KReason
        return LocalReturnData;
    };

    return StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert });

};

export { StartFunc };