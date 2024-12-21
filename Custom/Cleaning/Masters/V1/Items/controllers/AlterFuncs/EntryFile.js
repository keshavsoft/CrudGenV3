import { AlterFunc as AlterFuncRepo } from '../../repos/AlterFuncs/EntryFile.js';

let AlterFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await AlterFuncRepo({ inId: LocalId });
    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { AlterFunc };