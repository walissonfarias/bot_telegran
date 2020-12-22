const YouTube =  require('youtube-node');
const config = require('./yt-config');

const youtube = new YouTube();
youtube.setKey(config.key);

youtube.search('Serviços de gerenciamento de E-mails', 2, function(error, result){
    if(!error){
        console.log(JSON.stringify(result, null, 2));
    } else {
        console.log('Deu erro!');
    }
});
