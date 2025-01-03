import {
    GetFuncs as GetFuncsRepo,
    GetAsIsFuncs as GetAsIsFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

const GetFuncs = (req, res) => {
    const { inBranch, inFromDate, inToDate } = req.params;
    const LocalFromRepo = GetFuncsRepo({ inBranch, inFromDate, inToDate });

    if (LocalFromRepo.length === 0) {
        return res.status(500).end();
    }

    return res.status(200).json(LocalFromRepo);
};

const GetAsIsFuncs = (req, res) => {
    const LocalFromRepo = GetAsIsFuncsRepo();

    if (!LocalFromRepo.KTF) {
        return res.status(500).send(LocalFromRepo.KReason);
    }

    return res.status(200).json(LocalFromRepo);
};

export { GetFuncs, GetAsIsFuncs };
