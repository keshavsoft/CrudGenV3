const CommonFilterKey = "F_F_Entry_Return_Scan";
const CommonFilterKey2 = "F_F_Pressing_Return_Scan";
const CommonFilterKey3 = "F_F_Completion_Scan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalFilteredArray = inQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true || element[CommonFilterKey2] === true || element[CommonFilterKey3] === true;
    });

    return LocalFilteredArray;
};

export { StartFunc };
