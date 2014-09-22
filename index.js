var request = require('request')
    , cheerio = require('cheerio')
    ;

module.exports.define = function (word, callback) {
    request({uri: "http://dexonline.ro/definitie/" + word}, function (err, res, body) {
        if (res.statusCode == 200) {
            var $ = cheerio.load(body)
                , item = {}
                , $firstDef = $('.def').first()
                ;

            item.singular = $firstDef.find('b').first().html();
            item.plural = $firstDef.find('i').first().html();
            item.type = $firstDef.find('abbr').first().attr('title');
            item.definition = $firstDef.first().html();
        } else {
            var err = 'No item found';
        }

        callback.call(res, err, item);
    });
}
