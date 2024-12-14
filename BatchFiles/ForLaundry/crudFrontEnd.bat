@echo off
cd ..\crudFrontEnd

call npm run Dashboard

xcopy .\publicDir\AllTables ..\CrudGenV3\public\crudFrontEnd\AllTables /h /i /c /k /e /r /y

cd ..\CrudGenV3
