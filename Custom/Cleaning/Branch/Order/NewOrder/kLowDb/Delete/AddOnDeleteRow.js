import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObjectWithSchema.js";

const StartFunc = async ({ inBranch, inmainId, inId, AddOnKey }) => {
  const LocalKey = "ItemsInOrder";
  let LocalMainId = parseInt(inmainId);
  const db = StartFuncReturnDbObject({ inTable: inBranch }).dbObject;

  db.read();
  const LocalarrayOfObjects = db.data;
  let LocalFindId = LocalarrayOfObjects[LocalarrayOfObjects.length - 1];

  if (!LocalFindId || LocalFindId.UuId !== LocalMainId) {
    return { KTF: false, KReason: `Id : ${LocalMainId} not found in data` };
  }

  if (!(LocalKey in LocalFindId)) {
    return { KTF: false, KReason: `Key : ${LocalKey} not found in Row` };
  }

  removeAddOn(LocalFindId, inId, AddOnKey);
  db.write();

  return { KTF: true };
};

const removeAddOn = (order, inId, addOnService) => {
  if (order && order.ItemsInOrder) {
    const item = order.ItemsInOrder[inId];
    if (item && item.AddOnArray) {
      item.AddOnArray = item.AddOnArray.filter(addOn => addOn.AddOnService !== addOnService);
    }
  }
};

// Usage
// StartFunc({ inBranch: "KKD", inmainId: 18, inId: "7", AddOnKey: "Strain2" });

export { StartFunc };
