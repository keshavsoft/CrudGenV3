import { StartFunc as StartFuncPullData } from "../CommonFuncs/CutomTable.js";

let StartFunc = ({ inBranch, inRow }) => {
    let LocalReturnData = { KTF: false };
    let LocalinBranch = inBranch;
    let LocalRow = parseInt(inRow);

    let LocalStartFuncPullData = StartFuncPullData({ inTable: LocalinBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    }

    const db = LocalStartFuncPullData.JsonData;
    let LocalRowFind = db.find(element => element.pk === LocalRow);

    if (LocalRowFind === undefined) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;
    }

    LocalReturnData.KTF = true;
    LocalReturnData.CustomerName = LocalRowFind.CustomerData?.CustomerName;
    LocalReturnData.Mobile = LocalRowFind.CustomerData?.CustomerMobile;
    LocalReturnData.BranchName = LocalRowFind.OrderData?.BranchName;
    LocalReturnData.Rate = LocalRowFind.ItemsInOrder?.Rate;
    LocalReturnData.OrderNumber = LocalRowFind.pk;

    return LocalReturnData;
};

export { StartFunc };
