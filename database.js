var fs = require('fs');

module.exports =
{
    getJokesFromDB: function()
    {
        return fs.readFileSync('jokesDB.json').toString();
    }
}
