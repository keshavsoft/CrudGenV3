@echo off
cd ..\FrontEndForUsers

call npm run Users

xcopy .\publicDir\LoginUsers ..\CrudGenV3\public\LoginUsers /h /i /c /k /e /r /y

cd ..\CrudGenV3
