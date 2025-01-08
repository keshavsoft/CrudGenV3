let PostFunc = (req, res, next) => {
    let LocalRequestBody = req.body;

    if (!LocalRequestBody.hasOwnProperty('QrCodeId')  ){
        res.status(404).json({
            KTF: false,
            KReason: "post request body should contain both 'QrCodeId'",
            body: {
                "QrCodeId": ""
            }
        });
        return;
    }

    next();
};

export { PostFunc };
