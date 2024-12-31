import { StartFunc as orders } from './orders.js';

let StartFunc = () => {
    const LocalOrdersArray = orders();

    return LocalOrdersArray;
};

export { StartFunc };
