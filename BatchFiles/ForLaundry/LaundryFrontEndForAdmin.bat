@echo off
cd ..\LaundryFrontEndForAdmin

call npm run Menu

call npm run AdminAllDays-CommonConfig-Menu

call npm run AdminAllDays-CommonConfig-QrCode-AsArray
call npm run AdminAllDays-CommonConfig-QrCode-BranchWise
call npm run AdminAllDays-CommonConfig-QrCode-BranchFilter
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-AsArray
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchFilter
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchWise
call npm run Admin-Masters
call npm run Accounts

xcopy .\publicDir ..\CrudGenV3\public\Laundry\Admin /h /i /c /k /e /r /y

cd ..\CrudGenV3