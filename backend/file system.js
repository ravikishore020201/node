const fs = require("fs");
fs.open("test.txt", "a", function (err, fd) {
    if (err) {
        console.log("cannot open the file");
        console.log(err);
        return;
    }
    function print() {
        fs.write(fd, " hello to new line ", function (err, x) {
            console.log(x);
        
        });
    }
    setInterval(print, 2000);
});


