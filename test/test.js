require("should");

describe("isConflict should return", function() {
    it("false on non-conflicted content", function() {
        var isConflict = require("../lib/is-conflict");
        var content = "good to go";
        isConflict(content).should.not.be.ok;
    });
    it("true on conflicted content", function() {
        var isConflict = require("../lib/is-conflict");
        var content = "<<<<<<< HEAD\n local code\n=======\n  remote code\n>>>>>>> master";
        isConflict(content).should.be.ok;
    });
});