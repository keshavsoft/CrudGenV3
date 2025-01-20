import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranchScan.js';
import { StartFunc as EntryScan } from './EntryScan.js';
import { StartFunc as WashingScan } from './WashingScan.js';
import { StartFunc as PressingScan } from "./PressingScan.js";
import { StartFunc as CompletionScan } from "./CompletionScan.js";
import { StartFunc as PressingRejectScan } from "./PressingRejectScan.js";
import { StartFunc as prepareCollection } from "./prepareCollection.js";
import { StartFunc as CompletetedScanned} from "./FactoryToBranchCompletion.js";
import { StartFunc as EntryRejectScan} from "./EntryRejectScan.js";
import { StartFunc as PressingReWash} from "./PressingReWash.js";

let StartFunc = () => {
    const QrCodeData = QrCodes();
    const BranchScanData = BranchScan();
    const EntryScanData = EntryScan();
    const WashingScanData = WashingScan();
    const PressingScanData = PressingScan();
    const CompletionScanData = CompletionScan();
    const PressingRejectScanData = PressingRejectScan();
    const FactoryToBranchCompletion = CompletetedScanned();
    const EntryRejectScanData = EntryRejectScan();
    const PressingReWashScanData = PressingReWash();

    let jVarLocalTransformedData = prepareCollection({
        inQrData: QrCodeData,
        inBranchScandata: BranchScanData,
        inEntryScanData: EntryScanData,
        inWashingScanData: WashingScanData,
        inPressingScanData: PressingScanData,
        inCompletionScanData: CompletionScanData,
        inPressingRejectScanData: PressingRejectScanData,
        inFactoryToBranch: FactoryToBranchCompletion,
        inEntryRejectScanData: EntryRejectScanData,
        inPressingReWashScanData: PressingReWashScanData


    });

    return jVarLocalTransformedData;
};

export { StartFunc };
