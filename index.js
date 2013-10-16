var colors = require("colors");
var exec = require("child_process").exec;
var fs = require("fs");
var isConflict = require("./lib/is-conflict");

var hook = process.argv[2];

if (hook != "pre-commit") {
    console.error("This is only going to work with pre-commit");
} else {
    //TODO: it would be sweet if hooks had an api that gave me these... 
    exec("git diff --cached --name-status HEAD --diff-filter=AMR", function(err, stdout, stderr) {
        if (err) {
            console.log("GIT ERROR".red);
            console.log(err);
            process.exit(1);
        } else if (stderr) {
            console.log(stderr);
            process.exit(1);
        } else {
            var lines = stdout.split("\n");
            var iLines = lines.length;
            var bad_files = [];
            while (iLines--) {
                var line = lines[iLines];
                var filename = line.split("\t")[1];
                if (line != "") {
                    try {
                        var content = fs.readFileSync(filename, {
                            encoding: "utf8"
                        });
                    } catch (err) {
                        console.log(filename + ": ERROR".red);
                        console.log(err.message);
                        process.exit(1);
                    }

                    if (isConflict(content)) {
                        bad_files.push(filename);
                    }
                }
            }

            if (bad_files.length > 0) {
                var iBF = bad_files.length;
                while (iBF--) {
                    console.log(bad_files[iBF].blue + " has a conflict".red);
                }
                process.exit(1);
            }
        }
    });
}