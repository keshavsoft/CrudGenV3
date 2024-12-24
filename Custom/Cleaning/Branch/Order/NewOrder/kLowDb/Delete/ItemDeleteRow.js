import { StartFunc as StartFuncReturnDbObject } from "../CommonFuncs/ReturnDbObjectWithSchema.js";

let StartFunc = async ({ inBranch, inId, inSubId }) => {
  let LocalBranch = inBranch;
  let LocalId = parseInt(inId);
  const LocalKey = "ItemsInOrder";
  const LocalSubId = inSubId;

  let LocalStartFuncPullData = StartFuncReturnDbObject({ inTable: LocalBranch });

  const db = LocalStartFuncPullData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  let LocalFindId = LocalarrayOfObjects.find((obj) => obj.UuId === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  if (LocalKey in LocalFindId === false) {
    return await { KTF: false, KReason: `Key : ${LocalKey} not found in Row` };
  };

  if (LocalSubId in LocalFindId[LocalKey] === false) {
    return await { KTF: false, KReason: `SubId : ${LocalSubId} not found in Row:Key` };
  };

  for (let key in LocalFindId.AddOnData) { if (LocalFindId.AddOnData[key].AddOnItemSerial == LocalSubId) { delete LocalFindId.AddOnData[key]; } }

  delete LocalFindId[LocalKey][LocalSubId];

  db.write();

  return await true;
};

export { StartFunc };
// StartFunc({ inBranch: "KKD", inId: 1, inKey: "ItemsInOrder", inSubId: "1" })
