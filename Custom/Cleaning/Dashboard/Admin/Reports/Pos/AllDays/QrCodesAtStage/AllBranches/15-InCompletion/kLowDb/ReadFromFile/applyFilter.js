const CommonPressingScanFilterKey = "PressingScan";
const CommonWashingScanFilterKey = "WashingScan";
const CommonCompletionScanFilterKey = "CompletionScan";



const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === false &&
            element[CommonWashingScanFilterKey] === false &&
            element[CommonCompletionScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
