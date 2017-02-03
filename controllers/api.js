var jwt = require('jsonwebtoken');

exports.post = function(req, res) {

    var toUser = "oops not a token";

    if (req && req.body){

        var decoded = jwt.decode(req.body.token, {complete: true});
        console.log(req.body.token);

        if(decoded) {
            console.log(decoded.header);
            console.log(decoded.payload)
            toUser = decoded.payload;
        }
    }

    res.send(toUser);

}

exports.show = (function(req, res) {

    res.send("herro");
});