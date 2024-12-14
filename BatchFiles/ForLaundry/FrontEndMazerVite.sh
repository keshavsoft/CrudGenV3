#!/bin/bash

# Navigate to the FrontEndMazerVite directory
cd ../FrontEndMazerVite

# Run each npm script sequentially
npm run FromBranchVoucher
npm run FromBranchQrCodes
npm run WashingVoucher
npm run FromEntryQrCodes
npm run PressingQrCodes
npm run PressingVoucher
npm run CompletionVoucher
npm run CompletionQrCodes

# Copy the publicDir to the target directory in CrudGenV3
rsync -av --progress ./publicDir/ ../CrudGenV3/public/Laundry/Factory

# Navigate to the CrudGenV3 directory
cd ../CrudGenV3
