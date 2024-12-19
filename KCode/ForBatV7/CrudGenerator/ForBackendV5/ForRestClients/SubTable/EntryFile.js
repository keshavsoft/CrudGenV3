import { StartFunc as Show } from "./Show/EntryFile.js";
import { StartFunc as Create } from "./Create/EntryFile.js";
import { StartFunc as StartFuncDelete } from "./Delete/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo, inConfigJson }) => {
    Show({ inTablesCollection, inTo, inConfigJson });
    Create({ inTablesCollection, inTo, inConfigJson });
    StartFuncDelete({ inTablesCollection, inTo, inConfigJson });
};

export { StartFunc };