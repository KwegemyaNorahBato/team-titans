//Inside the controller, we import thye model
Info = require('./apiModel');

// imports from index
exports.index = function(req, res){
    Info.get( function(err, info){
        if (error) {
        res.json({
            status: "Error",
            message: err
        });
        res.json({
            status: "Success",
            message: "Got Info Sucessfully",
            data: info
        })}
    })
}