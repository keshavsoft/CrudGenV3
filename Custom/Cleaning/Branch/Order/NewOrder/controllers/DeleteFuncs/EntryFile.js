import { mainTableDeleteFunc as mainTableDeleteFuncRepo, addOnTableDeleteFunc as addOnTableDeleteFuncRepo } from '../../repos/DeleteFuncs/EntryFile.js';

let mainTableDeleteFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.Id;
    let LocalBranch = LocalParams.inBranch;

    let LocalFromRepo = await mainTableDeleteFuncRepo({ inId: LocalId, inBranch: LocalBranch });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};
let addOnTableDeleteFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.Id;
    let LocalBranch = LocalParams.inBranch;
    let LocalmainId = LocalParams.mainId;


    let LocalFromRepo = await addOnTableDeleteFuncRepo({ inId: LocalId, inBranch: LocalBranch, inmainId: LocalmainId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { mainTableDeleteFunc, addOnTableDeleteFunc };