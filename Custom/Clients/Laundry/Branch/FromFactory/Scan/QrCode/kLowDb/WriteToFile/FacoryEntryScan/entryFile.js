import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";

let StartFunc = ({ inBranch, inDataInsert }) => {

    let LocalTable = inBranch;
    let LocalQrId = inDataInsert.QrCodeId;
    let LocalDc = inDataInsert.VoucherRef;
    let LocalDataInsert = inDataInsert;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inDc: LocalDc, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    return StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert });

};

export { StartFunc };