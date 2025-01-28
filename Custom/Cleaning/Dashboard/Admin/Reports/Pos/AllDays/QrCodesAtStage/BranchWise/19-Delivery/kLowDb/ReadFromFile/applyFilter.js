const CommonFilterKey = "F_F_Completion_Scan";
const CommonFilterKey2 = "To_Delivery_Scan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true &&
        element[CommonFilterKey2] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
