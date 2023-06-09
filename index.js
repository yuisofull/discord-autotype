const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('nhankiet0501@gmail.com', 'nhankiet123')

    await dc.likeChannelProcess('915228773958430760', '927979407056994364', 1) // 1 = 1 minute

    debugger;

})();
