import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as To_Delivery_Scan } from '../CommonFuncs/To_Delivery_Scan.js';

const StartFunc = ({ inOrderId, inBranch }) => {
    const LocalOrderId = inOrderId;
    const LocalBranch = inBranch;

    const LocalQrCodes = QrCodes();
    const LocalTo_Delivery_Scan = To_Delivery_Scan();

    const LocalFilterQrCodes = LocalQrCodes.filter(e => e.BookingData.OrderData.BranchName === LocalBranch && e.OrderNumber == LocalOrderId);
    const LocalFilterDeliveryScan = LocalTo_Delivery_Scan.filter(e => e.BranchName === LocalBranch && e.OrderNumber == LocalOrderId);

    return jFLocalMergeFunc({ inOrederQrs: LocalFilterDeliveryScan, inEntryCancelScan: LocalFilterQrCodes });
};

const jFLocalMergeFunc = ({ inOrederQrs, inEntryCancelScan }) => {
    let Localreturndata = inOrederQrs.map(loopDc => {
        const LocalQrfind = inEntryCancelScan.find(ele => ele.pk == loopDc.QrCodeId);

        return {
            OrderNumber: LocalQrfind?.OrderNumber,
            CustomerName: LocalQrfind?.BookingData.CustomerData.CustomerName,
            CustomerMobileNumber: LocalQrfind?.BookingData.CustomerData.Mobile,
            OrderDate: new Date(LocalQrfind?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(LocalQrfind?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: LocalQrfind?.ItemName,
            Rate: LocalQrfind?.Rate,
            QrCodeId: LocalQrfind?.pk,
            BranchName: LocalQrfind?.BookingData.OrderData.BranchName,
            TimeSpan: TimeSpan({ DateTime: LocalQrfind?.DateTime }),
        }

    });

    return Localreturndata

};

const TimeSpan = ({ DateTime }) => {
    const diffMs = new Date() - new Date(DateTime);
    const diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    const diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) return `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    if (diffDays > 0) return `${diffDays} days, ${diffHrs} hours, ${diffMins} min`;
    if (diffHrs > 0) return `${diffHrs} hours, ${diffMins} min`;
    return `${diffMins} min`;
};

export { StartFunc };
