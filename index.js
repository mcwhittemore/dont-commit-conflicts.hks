var colors = require("colors");
var sgf = require("staged-git-files");
sgf.includeContent = true;
var isConflict = require("./lib/is-conflict");

var hook = process.argv[2];

if (hook != "pre-commit") {
    console.error("This is only going to work with pre-commit");
} else {
    sgf("AMR", function(err, results) {
        if (err) {
            console.log("GIT ERROR".red);
            console.log(err);
            process.exit(1);
        } else if (results.length == 0) {
            console.log("> No files to commit".yellow);
        } else {
            var bad_files = [];
            var iFiles = results.length;
            while (iFiles--) {
                if (isConflict(results[iFiles].content)) {
                    bad_files.push(results[iFiles].filename);
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