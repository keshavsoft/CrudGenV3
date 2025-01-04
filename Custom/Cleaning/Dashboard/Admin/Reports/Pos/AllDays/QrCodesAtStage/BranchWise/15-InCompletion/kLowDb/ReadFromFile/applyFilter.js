const CommonPressingScanFilterKey = "PressingScan";
const CommonCompletionScanFilterKey = "CompletionScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === true &&
            element[CommonCompletionScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
