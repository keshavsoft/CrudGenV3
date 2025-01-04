const CommonPressingScanFilterKey = "PressingScan";
const CommonCompletionScanFilterKey = "CompletionScan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === true &&
        element[CommonCompletionScanFilterKey] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
