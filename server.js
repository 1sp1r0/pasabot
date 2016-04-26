var http = require('http');


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
          bot.reply(message,{
      text: "আমি একজন সম্মানিত পাছা, কেউ কেউ আমাকে নিতম্ব বলে",
      username: "পাছা",
      icon_emoji: ":poop:",
    });
    });

    controller.hears(["Fuck","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
          bot.reply(message,'You too');
    });
    controller.hears(["oi","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
          bot.reply(message,'কী হইসে ভাল্লাগে না???');
    });


http.createServer(function(req, res) {
      res.writeHead(200, {
            'Content-Type': 'text/plain'
      });


    


      res.end("Hello world");
}).listen(process.env.PORT || 5000);