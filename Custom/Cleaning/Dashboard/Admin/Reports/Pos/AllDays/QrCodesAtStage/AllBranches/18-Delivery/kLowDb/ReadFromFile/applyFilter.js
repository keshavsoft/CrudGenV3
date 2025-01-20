const CommonCompletedScanFilterKey = "CompletedScanFactory";
const CommonDeliveryScanFilterKey = "DeliveryScan";



const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonCompletedScanFilterKey] === true &&
            // element[CommonWashingScanFilterKey] === false &&
            element[CommonDeliveryScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
