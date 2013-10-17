module.exports = function(content) {
    var matches = content.match(/(<<<|>>>)+.*\n/g);
    return matches != null;
}