#!/bin/bash

# Navigate to the FrontEndForUsers directory
cd ../FrontEndForUsers

# Run the Users npm script
npm run Users

# Copy the LoginUsers directory to the target directory in CrudGenV3
rsync -av --progress ./publicDir/LoginUsers/ ../CrudGenV3/public/LoginUsers

# Navigate to the CrudGenV3 directory
cd ../CrudGenV3
