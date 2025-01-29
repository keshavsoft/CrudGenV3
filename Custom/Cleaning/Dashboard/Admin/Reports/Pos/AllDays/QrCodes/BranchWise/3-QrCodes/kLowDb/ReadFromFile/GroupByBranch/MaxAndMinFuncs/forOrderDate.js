let StartFunc = ({ inDataAsArray }) => {
    const LoopInsideOrderDateTime = inDataAsArray.map(element => {
        return element.OrderDateTime
    });

    return {
        OrderDateMax: LoopInsideOrderDateTime.reduce((a, b) => a > b ? a : b),
        OrderDateMin: LoopInsideOrderDateTime.reduce((a, b) => a < b ? a : b),
    };
};

export { StartFunc };