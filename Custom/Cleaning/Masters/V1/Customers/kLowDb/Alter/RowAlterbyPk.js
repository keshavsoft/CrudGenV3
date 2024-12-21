import { StartFunc as MastersCustomers } from '../CommonFuncs/MastersCustomers.js';

let StartFunc = async ({ inId }) => {
  let LocalId = parseInt(inId);


  let LocalMastersCustomersData = MastersCustomers();
  let db = LocalMastersCustomersData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  let LocalArrayAfterAlter = alterObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterAlter;
  db.write();

  return await true;
};

let alterObjectById = ({ inCollection, inId}) => {
  let LocalCollection = inCollection;
  let LocalId = inId;

  LocalCollection.splice(
    LocalCollection.findIndex((a) => a.pk === LocalId),
    1
  );

  return LocalCollection;
};

export { StartFunc };