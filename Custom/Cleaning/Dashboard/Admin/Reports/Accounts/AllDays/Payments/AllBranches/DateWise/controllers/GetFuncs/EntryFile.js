import {
    GetFuncs as GetFuncsRepo,
    GetAsIsFuncs as GetAsIsFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let localinBranch = LocalParams.inBranch;
    let localFromDate = LocalParams.inFromDate;
    let localToDate = LocalParams.inToDate;

    let LocalFromRepo = GetFuncsRepo({ inBranch: localinBranch, inFromDate: localFromDate, inToDate: localToDate });

    if (LocalFromRepo.length === 0) {
        res.status(500);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetAsIsFuncs = (req, res) => {

    let LocalFromRepo = GetAsIsFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs, GetAsIsFuncs
};