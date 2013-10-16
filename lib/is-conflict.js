module.exports = function(content) {
    var matches = content.match(/[\n^]*<<<<<<<|\n=======|\n>>>>>>>/g);
    return matches != null;
}