const CommonFilterKey = "F_F_Completion_Scan";
const CommonFilterKey2 = "To_Delivery_Scan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true &&
        element[CommonFilterKey2] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
