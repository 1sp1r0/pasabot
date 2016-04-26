var http = require('http');
var port = 3000;

var Botkit = require('botkit');
    var controller = Botkit.slackbot();
    var bot = controller.spawn({
    token: 'xoxb-37740112834-cp4LAjC3p5hGQZKQarY0kQQ5'
    })
    bot.startRTM(function(err,bot,payload) {
    if (err) {
            throw new Error('Could not connect to Slack');
    }
    });

    controller.hears(["hi","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
          bot.reply(message,'Hello there');
    });

    controller.hears(["hello","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
          bot.reply(message,"What's up!");
    });

    controller.hears(["Who are you?","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
          bot.reply(message,"I'm a bot made by Reza, I think you know him");
    });

    controller.hears(["Fuck","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
          bot.reply(message,'You too');
    });


http.createServer(function(req, res) {
      res.writeHead(200, {
            'Content-Type': 'text/plain'
      });


    


      res.end("Hello world");
}).listen(port);